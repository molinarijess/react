import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription({ weatherDescription }) {
  return (
    <div className="WeatherDescription" id="weather-description">
      {weatherDescription}
    </div>
  );
}
