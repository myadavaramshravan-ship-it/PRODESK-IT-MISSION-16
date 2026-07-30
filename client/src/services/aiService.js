import axios from "axios";

const API_URL = "http://localhost:5000/api/ai/suggest";

export const askAssistant = async (prompt) => {
  const { data } = await axios.post(API_URL, {
    prompt,
  });

  return data;
};