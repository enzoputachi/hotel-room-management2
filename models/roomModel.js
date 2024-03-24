// Import mongoose for database schema and model creation
const mongoose = require('mongoose');

// Define the schema for Room collection
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roomtype',
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Create model for Room using the schema
const Room = mongoose.model('Room', roomSchema);

// Export the Room model to be used in other parts of the application
module.exports = Room;