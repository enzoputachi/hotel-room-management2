// Import neccesary dependencies
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { validateRequest } = require('../middlewares/roomValidation');

// Create a new room
router.post('/room/create', validateRequest, roomController.createRoom);

// Retrieve all rooms
router.get('/room/all', roomController.getAllRooms);

// Retrieve a specific room by its ID
router.get('/room/:Id', roomController.getRoomById);

// Update a specific room by its ID
router.patch('/room/:updateId', validateRequest, roomController.updateRoom);

//Delete a specific room by its ID
router.delete('/room/:deleteId', roomController.deleteRoom);

module.exports = router;