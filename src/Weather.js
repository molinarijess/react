import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";

export default function Weather({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function searchCity() {
    const apiKey = "1f17ba351ee112a37d7633ae135f9016";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
      });
    });
  }

  if (weatherData.ready) {
    return (
      <section id="frame">
        <CurrentDate formatDate={weatherData.date} />
        <div className="city-weather">
          <h1 className="city">{weatherData.city}</h1>

          <div className="temperature">{weatherData.temperature}ºC</div>

          <div className="weatherDescription">{weatherData.description}</div>
        </div>
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
