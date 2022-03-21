import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription({ description }) {
  return (
    <div className="WeatherDescription" id="weather-description">
      {description}
    </div>
  );
}
