import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Krugerrands from "./pages/SilverKrugerrands";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Krugerrands />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
