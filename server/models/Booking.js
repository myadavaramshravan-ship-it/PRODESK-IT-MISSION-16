const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema(
{
    customerName:{
        type:String,
        required:true
    },

    vehicleType:{
        type:String,
        required:true
    },

    serviceType:{
        type:String,
        required:true
    },

    bookingDate:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "In Progress",
            "Completed"
        ],
        default:"Pending"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model(
    "Booking",
    bookingSchema
);