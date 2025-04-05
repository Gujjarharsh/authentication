const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const authorize = require('../middlewares/authorizeMiddleware');

const router = express.Router();

router.get('/home', authenticateToken, authorize('/home'), (req, res) => { 
    res.json({ message: 'Welcome to Home Page' });
});

router.get('/about', authenticateToken, authorize('/about'), (req, res) => {
    res.json({ message: 'Welcome to About Page' });
});

router.get('/dashboard', authenticateToken, authorize('/dashboard'), (req, res) => {
    res.json({ message: 'Welcome to Dashboard' });
});

router.get('/admin_panel', authenticateToken, authorize('/admin_panel'), (req, res) => {
    res.json({ message: 'Welcome to Admin Panel' });
});

module.exports = router;
