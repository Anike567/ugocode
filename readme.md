# Node.js Authentication System

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Sign Up](#sign-up)
  - [Login](#login)
- [License](#license)

## Introduction

This project is a simple authentication system built with Node.js using Express for the server, JWT for authentication, bcrypt for password hashing, and MongoDB for the database. Environment variables are managed using an `.env` file.

## Technologies Used

- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- MongoDB (with Mongoose)
- dotenv

## Project Structure

```
project-root
│
├── config
│   └── db.js
├── controllers
│   └── authController.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── User.js
├── routes
│   └── authRoutes.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Anike567/ugocode.git
    cd ugocode
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    PORT=3000
    DATABASE_URL=mongodb://localhost:27017/authdb
    JWT_SECRET=your_jwt_secret_key
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

## Environment Variables

The following environment variables need to be set in the `.env` file:

- `PORT`: The port number on which the server will run.
- `DATABASE_URL`: The URL of the MongoDB database.
- `JWT_SECRET`: The secret key for JWT token signing.

## Usage

Once the server is running, you can use Postman or any other API client to interact with the authentication endpoints.

## API Endpoints

### Sign Up

- **URL:** `/api/auth/signup`
- **Method:** `POST`
- **Body Parameters:**
  - `name`: User's name
  - `email`: User's email
  - `password`: User's password

- **Success Response:**
  - **Code:** `201 Created`
  - **Content:** `{ message: "User registered successfully!" }`

### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body Parameters:**
  - `email`: User's email
  - `password`: User's password

- **Success Response:**
  - **Code:** `200 OK`
  - **Content:** `{ token: "JWT token" }`

## License

This project is licensed under the MIT License.

---

## Code Overview

### app.js

This file initializes the Express application, connects to the MongoDB database, and sets up the middleware and routes. It also starts the server on the specified port.

### config/db.js

This file contains the configuration for connecting to the MongoDB database. It exports a function to establish the connection.

### controllers/authController.js

This file contains the logic for handling user signup and login requests. It interacts with the User model, hashes passwords using bcrypt, and generates JWT tokens.

### middleware/authMiddleware.js

This file contains the middleware for protecting routes. It verifies the JWT token sent in the request headers and grants access if the token is valid.

### models/User.js

This file defines the User schema and model using Mongoose. It includes fields for the user's name, email, and hashed password.

### routes/authRoutes.js

This file defines the routes for user signup and login. It imports the authController functions and sets up the corresponding endpoints.

### .env

This file contains environment variables used in the application, such as the port number, database URL, and JWT secret key.
