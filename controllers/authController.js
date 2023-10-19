const User = require('../models/Users')
const jwt = require('jsonwebtoken')

// handle errors
const handleErrors = err => {
    let errors = { email: '', password: '' }
    console.log(err.message, err.code)

    //incrorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registred'
        return errors
    }

    //incorrect password
    if (err.message === 'incorrect password') {
        errors.password = ' this password is incorrect'
        return errors
    }

    // duplicate
    if (err.code === 11000) {
        errors.email = 'This email is already registered'
        return errors
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

// JWT token
const maxAge = 3 * 24 * 60 * 60
const createToken = id => {
    return jwt.sign({ id }, 'my secret', {
        expiresIn: maxAge,
    })
}

exports.signup_post = async (req, res) => {
    console.log('body ', req.body)
    const { email, password } = req.body
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body
    try {
        // You need to await User.login here and store the user.
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(200).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}
