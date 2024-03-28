const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/roomTypeController');
const { validateRequest } = require('../middlewares/roomValidation');
const { authenticateUser, authorizeAdmin } = require('../middlewares/authMiddleware');

// Create a new room type
router.post('/', authenticateUser, authorizeAdmin, validateRequest, roomTypeController.createRoomType); //

// Retrieve all room types
router.get('/', roomTypeController.getAllRoomTypes);

// Retrieve a specific room type by its ID
router.get('/', roomTypeController.getRoomTypeById);

// Update a specific room type by its ID
router.patch('/:id', authenticateUser, authorizeAdmin, validateRequest, roomTypeController.updateRoomType); //

// Delete a specific room type by its ID
router.delete('/:id', authenticateUser, authorizeAdmin, roomTypeController.deleteRoomType); //

// Export room router module
module.exports = router;
