import React, { useState, useEffect } from "react";
import Forecast from "./Forecast";
import "./WeatherDay.css";

export default function WeatherDay({ data }) {
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    setShowForecast(false);
  }, [data.city]);

  return (
    <div className="WeatherDay">
      {showForecast ? (
        <Forecast coordinates={data.coordinates} />
      ) : (
        <div className="city-weather">
          <a
            href="/"
            className="link-to-forecast"
            onClick={(event) => {
              event.preventDefault();
              setShowForecast(true);
            }}
          >
            <h1 className="city">{data.city}</h1>
          </a>
          <div className="temperature">{data.temperature}ºC</div>
          <div className="weatherDescription">{data.description}</div>
        </div>
      )}
    </div>
  );
}
