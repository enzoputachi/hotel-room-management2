// validationMiddleware.js
const Joi = require('joi');

// Middleware function to validate user data
const validateUserData = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    
    // Validate request body against schema
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = validateUserData;
