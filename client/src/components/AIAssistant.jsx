import { useState, useRef, useEffect } from "react";
import { askAssistant } from "../services/aiService";

function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    const question = prompt;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const data = await askAssistant(question);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: data.suggestion,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text:
            error.response?.data?.message ||
            "Unable to generate a response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="ai-chat">

      <div className="ai-header">
        <h2>AI Assistant</h2>
      </div>

      <div className="chat-body">

        {messages.length === 0 && (
          <div className="chat-placeholder">
            Ask a question about bookings, services or vehicles.
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.type === "user"
                ? "message user-message"
                : "message ai-message"
            }
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message ai-message typing">
            Thinking...
          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="chat-input">

        <textarea
          value={prompt}
          placeholder="Type your question..."
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleAsk}>
          Send
        </button>

      </div>

    </div>
  );
}

export default AIAssistant;