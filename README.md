E-Commerce Platform Backend
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

 POST /register: Register a new user.

    POST http://localhost:5000/auth/register
Content-Type: application/json

{
    "username": "Claw",
    "email": "clawAdmin@gmail.com",
    "password": "1234@Claw",
    "role":"admin"
}

res:{ "success" : "User Registered Successfully}


  * POST /login: Log in an existing user and create a session.

    POST http://localhost:5000/auth/login
    Content-Type: application/json

    {
        
        "email": "clawAdmin@gmail.com",
        "password": "1234@Claw"
        
    }

res:{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........",
  "role": "admin"
}

  * POST /products: Create a new product (admin only).

    POST http://localhost:5000/products/category/Cold%20Drinks%20%26%20Juices/product
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....

{
    "id": 789,
    "name": "waterMelonJuice",
    "weight": "140l",
    "price": "2999",
    "image": "https://justhomemade.wordpress.com/wp-content/uploads/2011/01/pongal-chutney-manjal.jpg"
}

res:{"success":"product created successfully}


  * GET /products: Retrieve all products.
  
    GET http://localhost:5000/products/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....

res:{
    "_id": "66ab917d17e03f13e28ae77c",
    "title": "E-Commerce",
    "categories": [
      {
        "_id": "66b095aff54513f0b0584292",
        "name": "Fruits & Vegetables",
        "products": [
          {
            "id": 5,
            "name": "Mango",
            "weight": "1kg",
            "price": "₹250",
            "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_5.jpg",
            "_id": "66af8ba2bc1eae2c9f236707"
          },
       ......
]
}


  
  * PUT /products/:id: Update a product by ID (admin only).

    PUT http://localhost:5000/products/category/Fruits%20%26%20Vegetables/product/1
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.

{
    "id":"1",
    "name": "Orange",
    "weight": "1kg",
    "price": "₹10",
    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
}

res:{"success":"product with id 1 updated successfully}


  * DELETE /products/:id: Delete a product by ID (admin only).

    DELETE http://localhost:5000/products/category/Fruits%20%26%20Vegetables/product/1
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
    
res:{"success":"product with id 1 delted successfully}

  * POST /orders: Place an order.

        POST  http://localhost:5000/orders/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....

{
    "products": [
        {
            "category": "Fruits & Vegetables",
            "id": 1,
            "name": "Real Fruit Power Juice - Cranberry",
            "weight": "1L",
            "price": "₹45.69",
            "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_21.jpg",
            "quantity": 2
        }
    ]
}

res:{"success":"order placed successfully"}


  * GET /orders: Retrieve all orders for the logged-in user.

  GET http://localhost:5000/orders/orders

  res: {
    "_id": "66af7a0c081a61b1ef8d83c1",
    "userId": "66ab6d99465e16c3641a50b8",
    "products": [
      {
        "productId": "5",
        "name": "Mango",
        "weight": "1kg",
        "price": 250,
        "quantity": 1,
        "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_5.jpg",
        "_id": "66af7a0c081a61b1ef8d83c2"
      }...
   ]
}




  * GET /sessions: Retrieve all user sessions.


      GET http://localhost:5000/sessions
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....


res:{
    "_id": "66ae1f2b7753118ef3c5bece",
    "userId": "66ab6d99465e16c3641a50b8",
    "ipAddress": "::1",
    "loginTime": "2024-08-03T12:14:35.286Z",
    "__v": 0
  },
  {
    "_id": "66ae2d727753118ef3c5d2ab",
    "userId": "66ab6d99465e16c3641a50b8",
    "ipAddress": "::1",
    "loginTime": "2024-08-03T13:15:30.691Z",
    "__v": 0
  },

  * POST /payment: Process a payment through the external payment gateway.

        POST http://localhost:5000/payment/api/pay 
Content-Type: application/json

{
    "transactionId": "T32449953747",
    "userId": "b0b6555d-637f-45d4-9f96-3aad3bd54404",
    "name": "jeevan",
    "amount": 199,
    "number": "9999999999"
}

res:{
  "success": true,
  "code": "PAYMENT_INITIATED",
  "message": "Payment initiated",
  "data": {
    "merchantId": "PGTESTPAYUAT86",
    "merchantTransactionId": "T32449953747",
    "instrumentResponse": {
      "type": "PAY_PAGE",
      "redirectInfo": {
        "url": "https://mercury-uat.phonepe.com/transact/simulator?token=1y2GUZuxj7Vk1e0haaybwfbo50a9tgz7v80Yi",
        "method": "GET"
      }
    }
  }
}


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
Documentation
API Documentation
Detailed API documentation is available here.

Deployment Documentation
Deployment steps and instructions are documented here.

Contact
For any queries or support, please contact:

Name: Jeevankumar S
Email: [jeevenkumar2003@gmail.com]
