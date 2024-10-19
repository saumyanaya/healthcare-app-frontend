// src/App.js
import React from "react";
import PatientRegister from "./components/PatientRegister";
import PatientLogin from "./components/PatientLogin";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Quantum Doctors</h1>
      <PatientRegister />
      <PatientLogin />
    </div>
  );
};

export default App;
