import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
