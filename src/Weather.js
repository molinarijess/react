import React, { useState, useEffect } from "react";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";
import "./Weather.css";
import axios from "axios";

export default function Weather({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [showForecast, setShowForecast] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    setShowForecast(false);
  }, [city]);

  function searchCity() {
    const apiKey = "1f17ba351ee112a37d7633ae135f9016";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
      });
    });
  }

  if (weatherData.ready) {
    return (
      <section id="Weather">
        <CurrentDate formatDate={weatherData.date} />
        {showForecast ? (
          <Forecast coordinates={weatherData.coordinates} />
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
              <h1 className="city">{weatherData.city}</h1>
            </a>
            <div className="temperature">{weatherData.temperature}ºC</div>
            <div className="weatherDescription">{weatherData.description}</div>
          </div>
        )}
        <form
          onSubmitCapture={(event) => {
            event.preventDefault();
            searchCity();
          }}
        >
          <input
            type="search"
            placeholder="Change City"
            className="search"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </form>
      </section>
    );
  } else {
    searchCity();
    return null;
  }
}
