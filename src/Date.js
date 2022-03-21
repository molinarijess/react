import React from "react";
import Time from "./Time";
import "./Date.css";

export default function Date({ week, time }) {
  return (
    <div className="Date">
      <span className="week-day" id="current-date">
        {" "}
        {week}
      </span>
      <Time time={time} />
    </div>
  );
}
