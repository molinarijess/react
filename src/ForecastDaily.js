import React from "react";
import "./ForecastDaily.css";

export default function ForecastDaily({ data }) {
  function week() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="ForecastDaily">
      <p className="forecast-week">{week()}</p>
      <div>
        <span className="forecast-max-temp">{Math.round(data.temp.max)}ºC</span>{" "}
        <span className="forecast-min-temp">{Math.round(data.temp.min)}ºC</span>
      </div>
      <div className="forecast-description">{data.weather[0].description}</div>
    </div>
  );
}
