import React from "react";
import Weather from "./Weather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <a
        href="/"
        className="backToWeather"
        onClick={() => {
          <Weather />;
        }}
      >
        back
      </a>
      <div>2</div>
      <div>3</div>
    </div>
  );
}
