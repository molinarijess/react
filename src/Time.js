import React from "react";

export default function Time({ time }) {
  return (
    <div className="time-now" id="current-time">
      {time}
    </div>
  );
}
