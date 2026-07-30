const rateLimit=require("express-rate-limit");


const authLimiter=rateLimit({

windowMs:15*60*1000,

max:10,

message:{
success:false,
message:"Too many login attempts"
}

});


const aiLimiter=rateLimit({

windowMs:60*1000,

max:5,

message:{
success:false,
message:"AI request limit exceeded"
}

});


module.exports={
authLimiter,
aiLimiter
};