import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create a root using the createRoot() method
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
