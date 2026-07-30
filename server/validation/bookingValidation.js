const Joi = require("joi");


const bookingSchema = Joi.object({

    customerName:Joi.string()
    .min(3)
    .required(),

    vehicleType:Joi.string()
    .required(),

    serviceType:Joi.string()
    .required(),

    bookingDate:Joi.date()
    .required(),

    status:Joi.string()
    .valid(
        "Pending",
        "In Progress",
        "Completed"
    )
    .optional()

});


module.exports = bookingSchema;