import React from "react";
import "./City.css";

export default function City({ city }) {
  return (
    <h1 className="City" id="city">
      {city}
    </h1>
  );
}
