// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware function to authenticate user
const authenticateUser = async (req, res, next) => {
    try {
        // Extract token from authorization header
        const testToken = req.headers.authorization || req.headers.Authorization
        let token;
        if (testToken && testToken.startsWith('Bearer')) {

            token = testToken.split(' ')[1];
        }
        if (!token) {
            throw new Error('token not found');
        }
        // Verify token and decode user information
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Find user by decoded userId
        const authorized = decoded.role
        if (authorized !== 'admin') {
            throw new Error('unauthorized');
        }
        console.log(authorized);
        
        // Attach user to request object
        req.user = decoded;
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
