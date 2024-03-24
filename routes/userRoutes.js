const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/userController');
const { validateUserData } = require('../middlewares/userValidation');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to create a new user
router.post('/user/create', userController.createUser);

// Route to authenticate a user
router.post('/user/login', userController.authenticateUser);

// Route to retrieve user profile
router.get('/user/:userId', userController.getUserProfile);

// Route to update user profile
router.patch('/user/:updateId', userController.updateUserProfile); //authenticateUser, validateUserData,

// Route to delete user
router.delete('/user/:deleteId', authenticateUser, userController.deleteUser);

module.exports = router;