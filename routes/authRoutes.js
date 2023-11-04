const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/signup').post(authController.signup_post)

router.route('/getUser').get(function (req, res, next) {
    res.end('Hello World')
})
router.post('/login', authController.login_post)

module.exports = router