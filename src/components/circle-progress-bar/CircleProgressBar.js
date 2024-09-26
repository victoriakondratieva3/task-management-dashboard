import React from "react";

import './CircleProgressBar.css';

export function CircleProgressBar(props) {
  const completionPercentage = calculatePercentage(props.total, props.completed);

  return (
    <svg className="circle-progress-bar" viewBox="0 0 68 68" >
      <circle 
        className="base-circle" 
        cx="34" cy="34" r="32" 
      />
      <circle 
        className="progress-circle" 
        cx="34" cy="34" r="32" 
        stroke-dashoffset={completionPercentage}
      />
      <text 
        className="progress-value" x="34" y="42">{completionPercentage}%</text>
    </svg>
  );
}

function calculatePercentage(total, completed) {
  if (total === 0) {
    return 0;
  }
  const completionPercentage = (completed / total) * 100;
  return Math.round(completionPercentage);
}

export default CircleProgressBar;