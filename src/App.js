import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Ensure this path is correct
import Login from "./components/Login"; // Ensure this path is correct
import ExampleComponent from "./components/ExampleComponent"; // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes properly using the 'element' prop */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/example" element={<ExampleComponent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
