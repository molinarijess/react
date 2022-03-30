import React, { useState } from "react";
import ForecastDaily from "./ForecastDaily";
import axios from "axios";

export default function Forecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  if (loaded) {
    return (
      <div className="Forecast">
        {" "}
        {forecast.map((dailyForecast, index) => {
          if (index < 3) {
            return (
              <div className="forecast-daily" key={index}>
                <ForecastDaily data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    const apiKey = "1f17ba351ee112a37d7633ae135f9016";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
      setLoaded(true);
    });
    return null;
  }
}
