# Housing Backend API

Backend for a real estate / property listing platform built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- JWT authentication using cookies
- Role-based authorization
- Property CRUD operations
- Owner-based property creation
- Admin-only update and delete

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser

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

## Installation

```bash
git clone https://github.com/kcyogesh7007/Housing.git
cd Housing
npm install
