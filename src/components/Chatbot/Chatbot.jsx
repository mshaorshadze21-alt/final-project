import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

const initialMessages = [
  {
    role: "assistant",
    content:
      "გამარჯობა! 👋 მე შენი AI ასისტენტი ვარ. რით შემიძლია დაგეხმარო?",
  },
];

const suggestions = [
  "რა ფუნქციები აქვს ვებგვერდს?",
  "დამეხმარე ინფორმაციის მოძიებაში",
  "რა შეგიძლია გააკეთო?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function sendMessage(text = input) {
    const content = text.trim();

    if (!content || loading) return;

    const userMessage = {
      role: "user",
      content,
    };

    // ვინახავთ მიმდინარე საუბრის ისტორიას
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((m) =>
              ["user", "assistant"].includes(m.role)
            )
            .slice(-12)
            .map(({ role, content }) => ({
              role,
              content,
            })),
      }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "შეტყობინების გაგზავნა ვერ მოხერხდა."
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      setError(
        err.message || "კავშირის შეცდომა. სცადე თავიდან."
      );
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function resetChat() {
    if (loading) return;

    setMessages(initialMessages);
    setError("");
    setInput("");
  }

  return (
    <div className="chatbot">
      {isOpen && (
        <section
          className="chat-window"
          aria-label="AI ჩატის ფანჯარა"
        >
          <header className="chat-header">
            <div className="chat-brand">
              <div className="chat-avatar">✦</div>

              <div>
                <h2>AI ასისტენტი</h2>
                <p>
                  <span className="status-dot" />
                  მზად ვარ დასახმარებლად
                </p>
              </div>
            </div>

            <div className="chat-actions">
              <button
                type="button"
                onClick={resetChat}
                disabled={loading}
                aria-label="ჩატის გასუფთავება"
                title="ახალი საუბარი"
              >
                ↻
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="ჩატის დახურვა"
              >
                ×
              </button>
            </div>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div
                className="message assistant typing"
                aria-label="AI პასუხს ამზადებს"
              >
                <span />
                <span />
                <span />
              </div>
            )}

            {error && (
              <div className="chat-error" role="alert">
                <p>{error}</p>
                <button
                  type="button"
                  onClick={() =>
                    sendMessage(
                      messages[messages.length - 1]?.content
                    )
                  }
                  disabled={loading}
                >
                  თავიდან ცდა
                </button>
              </div>
            )}

            {messages.length === 1 && (
              <div className="chat-suggestions">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={loading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            className="chat-form"
            onSubmit={handleSubmit}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="დაწერე შეტყობინება..."
              aria-label="შეტყობინების ტექსტი"
              disabled={loading}
              maxLength={4000}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="შეტყობინების გაგზავნა"
            >
              ↑
            </button>
          </form>

          <footer className="chat-footer">
            AI-ს პასუხები შეიძლება ყოველთვის ზუსტი არ იყოს.
          </footer>
        </section>
      )}

      <button
        type="button"
        className="chat-launcher"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "ჩატის დახურვა" : "AI ჩატის გახსნა"}
        aria-expanded={isOpen}
      >
        {isOpen ? "×" : "✦"}
      </button>
    </div>
  );
}