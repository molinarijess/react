import React from "react";
import Date from "./Date";
import City from "./City";
import Temperature from "./Temperature";
import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="content">
      <section id="frame">
        <Date week="tuesday, 1 mar 2022" time="17:20" />
        <div className="city-weather">
          <City city="London" />
          <Temperature temperature={10} weatherDescription="light rain" />
        </div>
        <Search />
      </section>
      <Footer />
    </div>
  );
}
