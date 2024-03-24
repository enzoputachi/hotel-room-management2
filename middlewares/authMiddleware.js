// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware function to authenticate user
const authenticateUser = async (req, res, next) => {
    try {
        // Extract token from authorization header
        const token = req.headers.authorization.split(' ')[1];
        // Verify token and decode user information
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Find user by decoded userId
        const user = await User.findById(decoded.userId);
        if (!user) {
            throw new Error('User not found');
        }
        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

// Middleware function to authorize admin
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Not authorized' });
    }
    next();
};

module.exports = {
    authenticateUser,
    authorizeAdmin
};
