import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Resume from "./Pages/Home/Resume";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/Resume' && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

// Wrap the App component with Router directly
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
