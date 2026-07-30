import { useState, useEffect } from "react";

import {
    createBooking,
    updateBooking
} from "../services/bookingService";


function BookingForm({ refresh, editingBooking, setEditingBooking }) {


    const [formData, setFormData] = useState({

        customerName: "",
        vehicleType: "",
        serviceType: "",
        status: "Pending",
        bookingDate: ""

    });



    useEffect(() => {
  if (editingBooking) {
    setFormData({
      customerName: editingBooking.customerName,
      vehicleType: editingBooking.vehicleType,
      serviceType: editingBooking.serviceType,
      status: editingBooking.status,
      bookingDate: editingBooking.bookingDate?.split("T")[0]
    });
  }
}, [editingBooking]);




    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };




    const handleSubmit=async(e)=>{

        e.preventDefault();


        console.log("Sending Data:",formData);



        if(editingBooking){


            await updateBooking(
                editingBooking._id,
                formData
            );


            setEditingBooking(null);


        }
        else{


            await createBooking(formData);


        }



        setFormData({

            customerName:"",
            vehicleType:"",
            serviceType:"",
            status:"Pending",
            bookingDate:""

        });


        refresh();


    };





    return (

        <form
            className="booking-form"
            onSubmit={handleSubmit}
        >


            <input

                type="text"

                name="customerName"

                placeholder="Customer Name"

                value={formData.customerName}

                onChange={handleChange}

            />



            <select

                name="vehicleType"

                value={formData.vehicleType}

                onChange={handleChange}

            >

                <option value="">
                    Vehicle Type
                </option>

                <option value="Car">
                    Car
                </option>

                <option value="Bike">
                    Bike
                </option>

                <option value="Truck">
                    Truck
                </option>


            </select>




            <select

                name="serviceType"

                value={formData.serviceType}

                onChange={handleChange}

            >

                <option value="">
                    Service Type
                </option>

                <option value="Oil Change">
                    Oil Change
                </option>

                <option value="Engine Repair">
                    Engine Repair
                </option>

                <option value="General Service">
                    General Service
                </option>


            </select>




            <input

                type="date"

                name="bookingDate"

                value={formData.bookingDate}

                onChange={handleChange}

            />




            <select

                name="status"

                value={formData.status}

                onChange={handleChange}

            >

                <option value="Pending">
                    Pending
                </option>

                <option value="In Progress">
                    In Progress
                </option>

                <option value="Completed">
                    Completed
                </option>


            </select>



            <button type="submit">

                {
                    editingBooking
                    ? "Update Booking"
                    : "Add Booking"
                }

            </button>



        </form>

    );

}


export default BookingForm;