// Import necessary dependencies
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Create a new User
exports.createUser = async (req, res) => {
    try {
        console.log("Received password:", req.body.password);

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

       // Create the user object with hashed password
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Authenticate a User and issue JWT token
exports.authenticateUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            throw new Error('User not found');
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        // If username and password are valid, create JWT token
        const token = jwt.sign({ role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token along with user information
        res.status(200).json({ message: 'user successfully logged in', user, token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

// Retrieve User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        res.status(200).json({ user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

