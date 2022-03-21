import React from "react";
import WeatherDescription from "./WeatherDescription";
import "./Temperature.css";

export default function Temperature({ temperature, weatherDescription }) {
  return (
    <div>
      <div className="Temperature" id="temperature">
        {temperature}ºC
        <WeatherDescription weatherDescription={weatherDescription} />
      </div>
    </div>
  );
}
