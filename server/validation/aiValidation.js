const Joi = require("joi");

const aiSchema = Joi.object({
  prompt: Joi.string().min(5).required(),
});

module.exports = aiSchema;