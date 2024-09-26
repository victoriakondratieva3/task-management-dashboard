import React from "react";

import CircleProgressBar from "../../components/circle-progress-bar/CircleProgressBar";

import './TaskTracker.css';

export function TaskTracker(props) {
  const totalTasks = props.totalTasks;
  const completedTasks = props.completedTasks;
  const completionPercentage = calculatePercentage(totalTasks, completedTasks);

  return (
    <div className="tt d-grid">
      <div className="tt-title">Running Task</div>
      <div className="tt-completed-count">{completedTasks}</div>
      <div className="tt-section r-group">
        <CircleProgressBar 
          progress={completionPercentage}
        />
        <div className="tt-course hv-center">
          <div className="tt-total">{totalTasks}</div>
          <div className="tt-course-label">Task</div>
        </div>
      </div>
    </div>
  );
}

function calculatePercentage(total, completed) {
  if (total === 0) {
    return 0;
  }
  const completionPercentage = (completed / total) * 100;
  return Math.round(completionPercentage);
}

export default TaskTracker;