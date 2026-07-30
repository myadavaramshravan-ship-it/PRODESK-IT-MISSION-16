const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log(
    "GEMINI KEY:",
    process.env.GEMINI_API_KEY
);


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);


module.exports = genAI;