const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
   const booking = await Booking.create({
    customerName:req.body.customerName,
    vehicleType:req.body.vehicleType,
    serviceType:req.body.serviceType,
    bookingDate:req.body.bookingDate,
    status:req.body.status || "Pending",
    user:req.user._id
});

    res.status(201).json({
      success: true,
      booking,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user._id
            },
            req.body,
            {
                new:true,
               runValidators:true
            }
        );
        if(!booking){
            return res.status(404).json({
                success:false,
                message:"Booking not found"
            });
        }
        res.status(200).json({
            success:true,
            booking
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
};

exports.deleteBooking = async (req,res)=>{
    try{
        const booking = await Booking.findOneAndDelete({
            _id:req.params.id,
            user:req.user._id
        });
        if(!booking){
            return res.status(404).json({
                success:false,
                message:"Booking not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Booking deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
};