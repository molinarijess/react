import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router";
import ForecastDaily from "./ForecastDaily";
import "./Forecast.css";
import { AiOutlineLeft } from "react-icons/ai";
import Weather from "./Weather";

import axios from "axios";

export default function Forecast({ coordinates, citySearched }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  //const navigate = useNavigate();

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
        <a
          href="/"
          className="back-to-weather"
          onClick={() => {
            <Weather />;
            //navigate(<Weather />);
          }}
        >
          <span className="back-to-weather">
            <AiOutlineLeft />
          </span>
        </a>{" "}
        <div className="forecast-show-data">
          {forecast.map((dailyForecast, index) => {
            if (index < 4) {
              return (
                <div className="forecast-daily-data" key={index}>
                  <ForecastDaily data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
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
