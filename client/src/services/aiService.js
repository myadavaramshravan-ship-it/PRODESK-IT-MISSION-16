import api from "./api";

export const askAssistant = async (prompt) => {

    const response = await api.post(
        "/api/ai/suggest",
        {
            prompt
        }
    );

    return response.data;

};