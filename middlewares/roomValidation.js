const { body, validationResult } = require('express-validator');

// Validation rules for room types
exports.validateRoomType = [
    body('name').notEmpty().withMessage('Name is required for room type'),
];

// Validation rules for rooms
exports.validateRoom = [
    body('name').notEmpty().withMessage('Name is required for room'),
    body('roomType').notEmpty().withMessage('Room type is required for room'),
    body('price').notEmpty().withMessage('Price is required for room'),
];

exports.validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
