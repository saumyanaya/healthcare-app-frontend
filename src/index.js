// src/index.js
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App"; // Ensure the path is correct
import "./index.css"; // If you have a CSS file

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
