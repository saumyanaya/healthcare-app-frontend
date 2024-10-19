// src/index.js
import axios from "axios";

// Set the default base URL for Axios
axios.defaults.baseURL = "http://localhost:5000/api";

// Other imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
