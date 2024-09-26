import React from "react";

import CircleProgressBar from "../../components/circle-progress-bar/CircleProgressBar";

import './TaskTracker.css';

export function TaskTracker(props) {
  const totalTasks = props.totalTasks;
  const completedTasks = props.completedTasks;

  return (
    <div className="tt d-grid">
      <div className="tt-title">Running Task</div>
      <div className="tt-completed-count">{completedTasks}</div>
      <div className="tt-section r-group">
        <CircleProgressBar 
          total={totalTasks} 
          completed={completedTasks} 
        />
        <div className="tt-course hv-center">
          <div className="tt-total">{totalTasks}</div>
          <div className="tt-course-label">Task</div>
        </div>
      </div>
    </div>
  );
}

export default TaskTracker;