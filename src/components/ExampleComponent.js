// ExampleComponent.js
import React, { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = new WebSocket("ws://localhost:5000"); // Ensure this matches your server URL

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      ws.close(); // Cleanup on component unmount
    };
  }, [ws]);

  const sendMessage = () => {
    if (input) {
      ws.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExampleComponent;
