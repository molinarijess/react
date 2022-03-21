import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    search !== "" && setTemperature("");
  }, [search]);

  function handleSubmit(event) {
    event.preventDefault();
    if (search !== "") {
      let apiKey = "1f17ba351ee112a37d7633ae135f9016";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`;
      axios.get(url).then((response) => {
        setTemperature(Math.round(response.data.main.temp));
      });
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    let city = event.target.value;
    if (city !== "") {
      setSearch(city);
    } else {
      setSearch("");
      setTemperature("");
    }
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="city"
          placeholder="search city"
          onChange={handleSearch}
        />
        <input type="button" value="search" />
      </form>
      <div>
        {search !== "" &&
          temperature !== "" &&
          `The temperature in ${search} is ${temperature}ºC`}
      </div>
    </div>
  );
}
