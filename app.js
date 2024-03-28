require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const roomTypeRoutes = require('./routes/roomTypeRoutes');
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes')

// Require the validation middleware
const { validateRequest } = require('./middlewares/roomValidation');
const { validateUserDate } = require('./middlewares/userValidation');

const app = express();
const PORT = process.env.PORT || 10000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/room-types', validateRequest, roomTypeRoutes); // Use roomType routes
app.use('/api/v1/rooms', validateRequest, roomRoutes); // Use room routes
app.use('/api/v1/users', userRoutes); // Use user routes validateUserDate,

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.error('Error connecting to MongoDB:', error.message));

module.exports = app;
