# hotel-user-management2

```markdown
# Room Management System

This is a simple Room Management System built with Node.js, Express, and MongoDB. It provides API endpoints to manage different room types, rooms, and users within a facility.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your environment variables by creating a `.env` file and adding the necessary variables:

```
PORT=4000
MONGODB_URI=<your MongoDB connection URI>
JWT_SECRET=<your secret key for JWT token>
```

4. Run the application using `npm start`.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

## Project Structure

```
.
├── controllers
│   ├── roomController.js
│   ├── roomTypeController.js
│   ├── userController.js   
├── middlewares
│   ├── validation.js
│   ├── auth.js            
│   ├── userValidation.js   
│   ├── authMiddleware.js   
│   └── validationMiddleware.js   <!-- New middleware file for user data validation -->
├── models
│   ├── roomModel.js
│   ├── roomTypeModel.js
│   └── userModel.js      
├── routes
│   ├── roomRoutes.js
│   ├── roomTypeRoutes.js
│   └── userRoutes.js     
├── app.js
└── .env
```

- **controllers:** Contains controller functions for managing room types, rooms, and users.
- **middlewares:** Contains middleware functions for request validation, user data validation, authentication, and authorization.
- **models:** Contains MongoDB schema definitions for room types, rooms, and users.
- **routes:** Contains API route definitions for room types, rooms, and users.
- **app.js:** Main entry point of the application.
- **.env:** Environment variables configuration file.

## Features

- Create, read, update, and delete room types.
- Create, read, update, and delete rooms.
- Manage users: create, read, update, and delete users with roles (guest or admin).
- Get all rooms with optional filtering by room type and price range.
- User management: register, authenticate, view profile, update profile, and delete account.
- User authentication: verify user identity using JWT tokens.
- User authorization: restrict access to certain routes based on user roles.
- User data validation: ensure that user input meets specified criteria before processing.

## API Endpoints

- **Room Types:**
  - `POST /api/v1/room-types`: Create a new room type.
  - `GET /api/v1/room-types`: Get all room types.

- **Rooms:**
  - `POST /api/v1/rooms`: Create a new room.
  - `GET /api/v1/rooms`: Get all rooms with optional filtering.
  - `GET /api/v1/rooms/:roomId`: Get a single room by ID.
  - `PATCH /api/v1/rooms/:roomId`: Update an existing room.
  - `DELETE /api/v1/rooms/:roomId`: Delete a room by ID.

- **Users:**
  - `POST /api/v1/users/create`: Create a new user.
  - `POST /api/v1/users/login`: Authenticate a user.
  - `GET /api/v1/users/:userId`: Get user profile.
  - `PATCH /api/v1/users/:userId`: Update user profile.
  - `DELETE /api/v1/users/:userId`: Delete user.

## Running the Tests

To run tests, use the command:

```
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## Acknowledgments

- This project was inspired by the need for a simple room management system.
- Special thanks to the developers of Node.js, Express, and MongoDB for their amazing tools.
- Thanks to Mongoose for simplifying MongoDB interactions and providing an elegant schema-based solution.
- Thanks to bcrypt for password hashing and jsonwebtoken for JWT token generation.
```