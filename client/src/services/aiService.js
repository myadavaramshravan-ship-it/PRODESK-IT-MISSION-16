import api from "./api";

export const getSuggestion = async (prompt) => {
  const response = await api.post("/api/ai/suggest", {
    prompt,
  });

  return response.data;
};