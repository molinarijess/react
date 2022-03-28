import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="content">
      <Weather defaultCity="London" />
      <Footer />
    </div>
  );
}
