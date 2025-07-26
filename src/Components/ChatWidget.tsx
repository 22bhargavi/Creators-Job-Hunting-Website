import { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, `🧑 You: ${input}`]);
    // Dummy response
    setMessages((prev) => [
      ...prev,
      `🤖 Bot: Sorry! I'm just a mock chatbot for now.`,
    ]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            BreadBot Assistant
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className="chat-msg">
                {msg}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
}
