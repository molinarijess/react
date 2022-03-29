import React from "react";
import "./CurrentDate.css";

export default function CurrentDate({ formatDate }) {
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let week = weekDays[formatDate.getDay()];
  let day = formatDate.getDate();
  let month = months[formatDate.getMonth()];
  let year = formatDate.getFullYear();
  let hours = formatDate.getHours();
  hours < 10 && (hours = `0${hours}`);
  let minutes = formatDate.getMinutes();
  minutes < 10 && (minutes = `0${minutes}`);

  return (
    <div className="CurrentDate">
      <span className="week-day">
        {week}, {day} {month} {year}
      </span>
      <div className="time-now">
        {hours}:{minutes}
      </div>
    </div>
  );
}
