import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;