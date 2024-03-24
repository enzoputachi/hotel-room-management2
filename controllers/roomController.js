const Room = require('../models/roomModel');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all rooms with optional filtering
exports.getAllRooms = async (req, res) => {
    try {
        let query = {};
        if (req.query.roomType) {
            query.roomType = req.query.roomType;
        }
        if (req.query.minPrice || req.query.maxPrice) {
            query.price = {};
            if (req.query.minPrice) {
                query.price.$gte = parseInt(req.query.minPrice);
            }
            if (req.query.maxPrice) {
                query.price.$lte = parseInt(req.query.maxPrice);
            }
        }
        if (req.query.search) {
            query.name = { $regex: req.query.search, $options: 'i'};
        }
        const rooms = await Room.find(query);
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: error.mesage });
    }
};

// Get a single room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        if (!room) {
            return res.status(404).json({ error: 'Room not found'});
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  Update an existing room
exports.updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
        if(!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: message });
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.roomId);
        if (!room) {
            return res.status(400).json({ error: 'Room not found'});
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};