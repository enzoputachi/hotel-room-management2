const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const { validateUserData } = require('../middlewares/userValidation');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to create a new user
router.post('/create', userController.createUser);

// Route to authenticate a user
router.post('/login', userController.authenticateUser);

// Route to retrieve user profile
router.get('/:userId', userController.getUserProfile);

// Route to update user profile
router.patch('/:userId', authenticateUser, userController.updateUserProfile); //validateUserData,

// Route to delete user
router.delete('/:userId', authenticateUser, userController.deleteUser);

module.exports = router;