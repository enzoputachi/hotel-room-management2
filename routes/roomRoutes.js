// Import neccesary dependencies
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { validateRequest } = require('../middlewares/roomValidation');

// Create a new room
router.post('/', validateRequest, roomController.createRoom);

// Retrieve all rooms
router.get('/', roomController.getAllRooms);

// Retrieve a specific room by its ID
router.get('/', roomController.getRoomById);

// Update a specific room by its ID
router.patch('/', validateRequest, roomController.updateRoom);

//Delete a specific room by its ID
router.delete('/', roomController.deleteRoom);

module.exports = router;