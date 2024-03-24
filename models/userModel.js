const mongoose = require('mongoose');

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
    // Username filled with type String, required, and unique
    username: {
        type: String,
        required: true,
        unique: true
    },

    // email field with type String and required
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Password field with type String and required
    password: {
        type: String,
        required: true
    },

    // Role filed with type String, restricted to 'guest' or 'admin', defaulting to 'guest'
    role: {
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest'
    }
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;