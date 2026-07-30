# AI integrated full-stack web application

A full-stack web application that helps mechanic workshops manage vehicle service bookings digitally.  
The system replaces manual paper and Excel-based booking management with a modern dashboard for creating, updating, tracking, and managing customer vehicle services.

---

# Features

## Authentication
- User registration
- User login
- JWT-based authentication
- Protected dashboard routes
- Secure password hashing using bcrypt

## Booking Management (CRUD)
- Create new bookings
- View all bookings
- Update booking details
- Delete bookings
- Search bookings
- Track service status

## Dashboard
- Total booking statistics
- Pending bookings count
- In Progress bookings count
- Completed bookings count
- Booking analytics chart

## AI Assistant
- Integrated AI chat assistant
- Helps users with booking-related queries

## Responsive UI
- Desktop dashboard layout
- Mobile-friendly design
- Clean corporate SaaS-style interface

---

# Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Context API
- CSS3

## Backend

- Node.js
- Express.js
- REST API Architecture
- JWT Authentication
- bcryptjs

## Database

- MongoDB
- Mongoose ODM

## Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

# Project Structure

```
mechanic-booking-system

│
├── client
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
│
├── server
│   │
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── .env
│   └── package.json
│
│
└── README.md

```

---

# Installation Guide

## Clone Repository

```bash
git clone <repository-url>

cd mechanic-booking-system
```

---

# Backend Setup

Navigate to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Start backend:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

Request:

```json
{
"name":"John Doe",
"email":"john@gmail.com",
"password":"123456"
}
```

---

### Login User

```
POST /api/auth/login
```

Request:

```json
{
"email":"john@gmail.com",
"password":"123456"
}
```

Response:

```json
{
"token":"jwt_token",
"user":{}
}
```

---

# Booking APIs

All booking routes require JWT authentication.

Header:

```
Authorization: Bearer token
```

---

## Create Booking

```
POST /api/bookings
```

Example:

```json
{
"customerName":"Rahul",
"phone":"9876543210",
"vehicleType":"Car",
"serviceType":"Engine Repair",
"date":"2026-07-31",
"status":"Pending"
}
```

---

## Get Bookings

```
GET /api/bookings
```

---

## Update Booking

```
PUT /api/bookings/:id
```

---

## Delete Booking

```
DELETE /api/bookings/:id
```

---

# Environment Variables

## Backend

| Variable | Description |
|---|---|
| PORT | Server port |
| MONGO_URI | MongoDB connection string |
| JWT_SECRET | JWT security key |
| CLIENT_URL | Frontend URL |

---

## Frontend

| Variable | Description |
|---|---|
| VITE_API_URL | Backend API URL |

---

# Deployment

## Backend Deployment (Render)

Settings:

Root Directory:

```
server
```

Build Command:

```
npm install
```

Start Command:

```
npm start
```

Environment Variables:

```
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret

CLIENT_URL=https://your-vercel-domain.vercel.app
```

---

## Frontend Deployment (Vercel)

Settings:

Root Directory:

```
client
```

Build Command:

```
npm run build
```

Output Directory:

```
dist
```

Environment Variable:

```
VITE_API_URL=https://your-render-url.onrender.com
```

---

# Security

Implemented:

- Password encryption
- JWT authentication
- Protected routes
- Environment variable protection
- CORS configuration

---

# Future Improvements

- Email notifications
- Online payment integration
- Customer dashboard
- Service history tracking
- Role-based access control
- Real-time booking updates
