const express = require("express");

const router = express.Router();

const { getSuggestion } = require("../controllers/aiController");

const validate = require("../middleware/validateMiddleware");

const aiSchema = require("../validation/aiValidation");

router.post(
  "/suggest",
  validate(aiSchema),
  getSuggestion
);

module.exports = router;