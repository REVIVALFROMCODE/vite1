import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import App2 from "./festival/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/festival" element={<App2 />} />
      </Routes>
    </Router>
    <App />
  </StrictMode>
);
