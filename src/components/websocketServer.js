// // websocketServer.js
// const WebSocket = require("ws");

// const server = new WebSocket.Server({ port: 5000 }); // Change port if needed

// server.on("connection", (ws) => {
//   console.log("New client connected");

//   ws.on("message", (message) => {
//     console.log(`Received message: ${message}`);
//     // Echo the message back to the client
//     ws.send(`You sent: ${message}`);
//   });

//   ws.on("close", () => {
//     console.log("Client disconnected");
//   });
// });

// console.log("WebSocket server is running on ws://localhost:5000");
import { useMemo, useEffect } from "react";

const ExampleComponent = () => {
  const ws = useMemo(() => new WebSocket("ws://localhost:5000/ws"), []);

  useEffect(() => {
    ws.onmessage = (event) => {
      console.log(event.data);
    };
    return () => ws.close(); // Clean up WebSocket on component unmount
  }, [ws]);

  return <div>WebSocket Example</div>;
};
