﻿E-Commerce Platform Backend
This project is a comprehensive e-commerce platform backend built with Node.js, Express.js, Supabase for authentication, MongoDB for data storage, and integrates with PhonePe for payment processing. The backend is deployed on Render, and the frontend is deployed on Netlify.

Table of Contents
Features
Technologies Used
Getting Started
Prerequisites
Installation
Environment Variables
API Endpoints
Deployment
Documentation
Contact
Features
User Management:
User registration and login
Role-based access control (Admin, User)
Product Management:
CRUD operations for products (Admin only)
Shopping Cart:
Add products to cart
View cart
Order Management:
Place orders
View past orders
Session Management:
Manage user sessions (login, logout)
Payment Integration:
Process payments using PhonePe
Technologies Used
Node.js
Express.js
Supabase (Authentication)
MongoDB (Mongoose)
PhonePe (Payment Gateway)
Render (Backend Deployment)
Netlify (Frontend Deployment)
Getting Started
Prerequisites
Node.js and npm installed
MongoDB instance running
Supabase account
PhonePe developer account
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Jeevankumar-s/ClawLaw-BE-Jeevan.git
cd e-commerce-platform-backend
Install dependencies:

bash
Copy code
npm install
Setup Environment Variables:

Create a .env file in the root directory and add the following environment variables:
env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_SECRET=your_jwt_secret
PHONEPE_API_KEY=your_phonepe_api_key
PHONEPE_MERCHANT_ID=your_phonepe_merchant_id
Environment Variables
Ensure the following environment variables are set in your .env file:

PORT: Port number for the server
MONGO_URI: MongoDB connection string
SUPABASE_URL: Supabase project URL
SUPABASE_KEY: Supabase API key
JWT_SECRET: Secret key for JWT token generation
PHONEPE_API_KEY: PhonePe API key
PHONEPE_MERCHANT_ID: PhonePe Merchant ID
API Endpoints
User Authentication and Authorization
POST /register: Register a new user
POST /login: Log in an existing user and create a session
Product Management (Admin only)
POST /products: Create a new product
GET /products: Retrieve all products
PUT /products/:id: Update a product by ID
DELETE /products/:id: Delete a product by ID
Shopping Cart
POST /cart: Add a product to the shopping cart
GET /cart: Retrieve the user's shopping cart
Order Management
POST /orders: Place an order
GET /orders: Retrieve all orders for the logged-in user
Session Management
GET /sessions: Retrieve all user sessions
Payment Integration
POST /payment: Process a payment through PhonePe
Deployment
Backend Deployment on Render
Commit and push your changes to GitHub.
Create a new Web Service on Render and connect it to your GitHub repository.
Set up the environment variables in the Render dashboard.
Deploy the service.
Frontend Deployment on Netlify
Build your frontend project.
Deploy the build directory to Netlify.
Set up the necessary environment variables in the Netlify dashboard.

Contact
For any queries or support, please contact:

Name: Jeevankumar S
Email: [jeevenkumar2003@gmail.com]
