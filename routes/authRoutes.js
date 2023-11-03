const { Router } = require('express');
const path = require('path');

const router = Router();

// Serve the registration page
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/register.js'));
});

// Serve the login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/src/'));
});

module.exports = router;
