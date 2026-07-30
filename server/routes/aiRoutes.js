const express = require("express");

const router = express.Router();

const { getSuggestion } = require("../controllers/aiController");

const validate = require("../middleware/validateMiddleware");

const aiSchema = require("../validation/aiValidation");

const {aiLimiter}=require("../middleware/rateLimiter");


router.post("/suggest",aiLimiter,validate(aiSchema),getSuggestion);

module.exports = router;