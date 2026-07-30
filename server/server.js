require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const aiRoutes = require("./routes/aiRoutes");


const app = express();


connectDB();


const allowedOrigins = [
    "http://localhost:5173",
    "https://prodesk-it-mission-16.vercel.app"
];


app.use(
    cors({
        origin: allowedOrigins,
        credentials:true
    })
);


app.use(express.json());


// Health check route
app.get("/", (req,res)=>{
    res.send("Mechanic Booking API is running");
});


// API routes
app.use("/api/auth", authRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/ai", aiRoutes);



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});