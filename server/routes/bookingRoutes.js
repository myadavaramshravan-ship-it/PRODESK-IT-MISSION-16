const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createBooking,
  getBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router.post("/", authMiddleware, createBooking);

router.get("/", authMiddleware, getBookings);

router.put("/:id", authMiddleware, updateBooking);

router.delete("/:id", authMiddleware, deleteBooking);

module.exports = router;