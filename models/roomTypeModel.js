// Import mongoose for database schema and model creation
const mongoose = require('mongoose');

// Define the schema for RoomType collection
const RoomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Room type name is required'],
        unique: true
    }
});

// Create model for RoomType using the schema
const RoomType = mongoose.model('RoomType', RoomTypeSchema);

// Export the RoomType model to be used in other parts of the application
module.exports = RoomType;