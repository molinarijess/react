import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";

export default function Weather({ defaultCity }) {
  // const [searched, setSearched] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });
  if (weatherData.ready) {
    return (
      <section id="frame">
        <CurrentDate formatDate={weatherData.date} />
        <div className="city-weather">
          <h1 className="city">{weatherData.city}</h1>

          <div className="temperature">{weatherData.temperature}ºC</div>

          <div className="weatherDescription">{weatherData.description}</div>
        </div>
        <input
          type="search"
          placeholder="Change City"
          className="search"
          // onChange={(event) => {
          //   event.target.value !== ""
          //     ? setSearched(event.target.value)
          //     : setSearched(defaultCity);
          // }}
          // onSubmit={(event) => {
          //   event.preventDefault();
          // }}
        />
      </section>
    );
  } else {
    const apiKey = "1f17ba351ee112a37d7633ae135f9016";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
      });
    });
    return null;
  }
}
