const RoomType = require('../models/roomTypeModel');

// Create a new room type
exports.createRoomType = async (req, res) => {
    try {
        // Create a new room type based on the request body
        const roomType = await RoomType.create(req.body);
        // Send a success response with the created room type
        res.status(201).json(roomType);
    } catch (error) {
        // Send an error response if something went wrong
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all room types
exports.getAllRoomTypes = async (req, res) => {
    try {
        // Find all room types in the database
        const roomTypes = await RoomType.find(req.body);
        // Send a success response with all room types
        res.status(200).json(roomTypes);
    } catch (error) {
        // Send an error response if something went wrong
        res.status(500).json({ error: error.message });
    }
};

// Retrieve a specific room type by its ID
exports.getRoomTypeById = async (req, res) => {
    try {
        // Find the room type by its ID
        const roomType = await RoomType.findById(req.params.id);
        // If room type is not found, return a 404 error
        if (!roomType) {
            return res.status(404).json({ error: 'Room type not found' });
        }
        // Send a success response with the found room type
        res.status(200).json(roomType);
    } catch (error) {
        // Send an error response if something went wrong
        res.status(500).json({ error: error.message });
    }
};

// Update a specific room type by its ID
exports.updateRoomType = async (req, res) => {
    try {
        // Find and update the room type by its ID with the new data provided in the request body
        const roomType = await RoomType.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // If room type is not found, return a 404 error
        if (!roomType) {
            return res.status(404).json({ error: 'Room type not found' });
        }
        // Send a success response with the updated room type
        res.status(200).json(roomType);
    } catch (error) {
        // Send an error response if something went wrong
        res.status(500).json({ error: error.message });
    }
};

// Delete a specific room type by its ID
exports.deleteRoomType = async (req, res) => {
    try {
        // Find and delete the room type by its ID
        const roomType = await RoomType.findByIdAndDelete(req.params.id);
        // If room type is not found, return a 404 error
        if (!roomType) {
            return res.status(404).json({ error: 'Room type not found' });
        }
        // Send a success response indicating the room type has been deleted
        res.status(200).json({ message: 'Room type deleted successfully' });
    } catch (error) {
        // Send an error response if something went wrong
        res.status(500).json({ error: error.message });
    }
};
