import {
    deleteBooking
} from "../services/bookingService";


function BookingTable({
    bookings,
    refresh,
    setEditingBooking
}) {


    return (

        <table className="booking-table">


            <thead>

                <tr>

                    <th>Customer</th>
                    <th>Vehicle</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>

                </tr>

            </thead>



            <tbody>


                {
                    bookings.map((booking)=>(

                        <tr key={booking._id}>


                            <td>
                                {booking.customerName}
                            </td>


                            <td>
                                {booking.vehicleType}
                            </td>


                            <td>
                                {booking.serviceType}
                            </td>


                            <td>
                                {booking.status}
                            </td>


                            <td>
                            {
                            booking.bookingDate
                            ? new Date(booking.bookingDate).toLocaleDateString()
                            : "No Date"
                            }
                            </td>


                            <td>


                                <button
                                onClick={() =>
                                    setEditingBooking(booking)
                                }
                                >
                                    Edit
                                </button>



                                <button

                                onClick={async()=>{

                                    await deleteBooking(
                                        booking._id
                                    );

                                    refresh();

                                }}

                                >
                                    Delete
                                </button>


                            </td>


                        </tr>

                    ))
                }


            </tbody>


        </table>

    );

}


export default BookingTable;