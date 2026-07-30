const express=require("express");

const router=express.Router();

const {register,login}=require("../controllers/authController");

const {authLimiter}=require("../middleware/rateLimiter");

const validate =require("../middleware/validateMiddleware");

const {registerSchema,loginSchema}
=
require("../validation/authValidation");

router.post("/register",validate(registerSchema),register);


router.post("/login",validate(loginSchema),login);

router.post("/login",authLimiter,login);

module.exports=router;