# Housing Backend API

Backend API for a real estate property listing platform built with Node.js, Express, and MongoDB.

This project provides authentication, role-based authorization, and property management APIs for a housing / real estate platform.

---

## Features

- User registration and login
- Password hashing using bcrypt
- JWT authentication using cookies
- Role-based authorization (admin / user)
- Property CRUD operations
- Owner-based property creation
- Admin-only property update and delete
- Async error handling middleware
- MongoDB database using Mongoose

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser

---

## Project Structure

controllers/
database/
middlewares/
models/
routes/
services/
server.js

---

## API Endpoints

### Auth Routes

POST /api/auth/register  
POST /api/auth/login  
POST /api/auth/logout  
GET /api/auth/profile  

### Property Routes

GET /api/properties  
GET /api/properties/:id  
POST /api/properties  
PATCH /api/properties/:id  
DELETE /api/properties/:id  

---

## Installation

git clone https://github.com/kcyogesh7007/Housing.git

cd Housing

npm install

---

## Environment Variables

Create a .env file

PORT=3000  
MONGO_URI=your_mongodb_connection_string  
SECRET_KEY=your_jwt_secret  
COOKIE_EXPIRES_IN=7  
JWT_EXPIRES_IN=7d  

---

## Run Project

npm run dev

or

node server.js

Server runs on

http://localhost:3000

---

## Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. JWT token is generated
4. Token stored in cookies
5. Protected routes verify JWT token
6. Role middleware restricts admin routes

---

## Future Improvements

- Image upload using Multer / Cloudinary
- Property search and filtering
- Pagination
- Contact / inquiry system
- API documentation

---

## Author

Yogesh Khadka  
GitHub: https://github.com/kcyogesh7007  
LinkedIn: https://www.linkedin.com/in/yogesh-khadka-76b77118b/
