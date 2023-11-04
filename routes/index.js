const router = require('express').Router()
const authRoutes = require('./authRoutes')
router.use('/', authRoutes)

router.get('/', function (req, res, next) {
    res.end('Hello World')
})

module.exports = router