import React, { useState, useEffect } from "react";
import "./App.css";

const predefinedQuestions = [
  "Who created you?",
  "Tell me a fun fact!",
  "What's the weather like?",
  "Tell me a joke!",
  "Who’s your favorite superhero?",
  "Why are you better than ChatGPT?",
];

export default function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [typingResponse, setTypingResponse] = useState("");
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [loading, setLoading] = useState(true);

  // Show loading screen for 3.5 seconds on every reload
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Speech Recognition
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recog = new window.webkitSpeechRecognition();
      recog.continuous = false;
      recog.interimResults = false;
      recog.lang = "en-US";

      recog.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        setQuery(transcript); // show what user said
        handleResponse(transcript);
      };

      recog.onend = () => setListening(false);
      setRecognition(recog);
    }
  }, []);

  // Typewriter effect for AI response
  useEffect(() => {
    let i = 0;
    if (response) {
      const interval = setInterval(() => {
        setTypingResponse(response.substring(0, i + 1));
        i++;
        if (i === response.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    } else {
      setTypingResponse("");
    }
  }, [response]);

  // === Backend Connection Function ===
  const sendToBackend = async (message) => {
    try {
      const res = await fetch("http://localhost:5000/api/jarvis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command: message }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse("⚠ Connection lost — please check your backend server.");
    }
  };

  // Handle response logic
  const handleResponse = (message) => {
    if (!message.trim()) return;
    let aiReply = "";

    if (/better|best|chatgpt|deep/i.test(message)) {
      aiReply =
        "😎 Obviously, I’m J.A.R.V.I.S. — I run on charm, circuits, and perfection. No contest!";
    } else if (/who created/i.test(message)) {
      aiReply = "🧠 I was designed by the brilliant mind of Tony Stark... allegedly.";
    } else if (/fun fact/i.test(message)) {
      aiReply =
        "🌌 Did you know a teaspoon of a neutron star weighs about 6 billion tons? Heavy stuff.";
    } else if (/weather/i.test(message)) {
      aiReply = "☀ It's always sunny in the cloud... get it? Cloud computing? 😄";
    } else if (/laugh|joke/i.test(message)) {
      aiReply = "😂 Why did the AI cross the road? It didn’t — it optimized the route!";
    } else if (/superhero/i.test(message)) {
      aiReply = "🦸 I'd say Iron Man — but I may be biased.";
    } else if (/hello|hi/i.test(message)) {
      aiReply = "👋 Hello there! Ready to activate my circuits for some intelligent banter?";
    } else {
      aiReply = "🤖 Hmmm, that's beyond my current directive — but I’ll learn, just for you!";
    }

    setResponse(aiReply);
    sendToBackend(message); // <--- backend call only
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const random =
        predefinedQuestions[Math.floor(Math.random() * predefinedQuestions.length)];
      setQuery(random);
    } else if (e.key === "Enter") {
      handleResponse(query);
    }
  };

  const startListening = () => {
    if (recognition && !listening) {
      setListening(true);
      recognition.start();
    }
  };

  // If still booting, show loading screen
  if (loading) return <LoadingScreen />;

  return (
    <div className="jarvis-layout">
      <div className="outer-border"></div>
      <div className="jarvis-logo">J.A.R.V.I.S.</div>

      <div className="jarvis-container">
        <div className="overlay-frame"></div>
        <h1 className="title">J.A.R.V.I.S. Interface</h1>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything or press Tab for suggestions..."
          className="input-box"
        />

        <div className="button-group">
          <button
            className={`mic-btn ${listening ? "listening" : ""}`}
            onClick={startListening}
          >
            🎙️

          </button>
          <button onClick={() => handleResponse(query)} className="exec-btn">
            Execute Command
          </button>
        </div>

        <div className="response-box">
          <h3 className="response-title">AI Response</h3>
          <p className="response-text">{typingResponse}</p>
        </div>
      </div>

      <footer className="jarvis-footer">
        © 2025 J.A.R.V.I.S. Interface | Powered by Stark Industries ⚡
      </footer>
    </div>
  );
}

// === J.A.R.V.I.S. Boot Screen ===
function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="jarvis-loader">
        <div className="outer-arc"></div>
        <div className="inner-arc"></div>
        <div className="core-dot"></div>
      </div>
      <h2 className="boot-title">Initializing J.A.R.V.I.S. Neural Matrix...</h2>
      <p className="boot-sub">Synchronizing data cores • Calibrating AI modules...</p>
    </div>
  );
}
