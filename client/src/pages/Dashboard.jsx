import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import AIAssistant from "../components/AIAssistant";
import BookingForm from "../components/BookingForm";
import BookingTable from "../components/BookingTable";
import { getBookings } from "../services/bookingService";

function Dashboard() {
  const [editingBooking, setEditingBooking] = useState(null);
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    try {
      const data = await getBookings();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error("Error loading bookings:", error);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="dashboard-content">
        <h1>Booking Dashboard</h1>

        {/* AI Assistant */}
        <div className="assistant-section">
          <AIAssistant />
        </div>

        {/* Booking Form */}
        <BookingForm
          refresh={loadBookings}
          editingBooking={editingBooking}
          setEditingBooking={setEditingBooking}
        />

        {/* Booking Table */}
        <BookingTable
          bookings={bookings}
          refresh={loadBookings}
          setEditingBooking={setEditingBooking}
        />
      </div>
    </div>
  );
}

export default Dashboard;