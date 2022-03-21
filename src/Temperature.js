import React from "react";
import "./Temperature.css";

export default function Temperature({ temperature }) {
  return (
    <div>
      <div className="Temperature" id="temperature">
        {temperature}ºC
      </div>
    </div>
  );
}
