import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Menu from "./components/menu/Menu";

import './css/style.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="d-flex">
          <Menu />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;