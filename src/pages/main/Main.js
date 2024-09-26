import React from "react";

import Header from "../../components/header/Header";
import TaskTracker from "../../components/task-tracker/TaskTracker";

import './Main.css';

export function Main() {
  return (
    <main className="main">
      <div className="main-content">
        <Header />
        <div className="main-container">
          <TaskTracker
            totalTasks={120}
            completedTasks={80}
          />
        </div>
      </div>
      <div className="main-sidebar">
      </div>
    </main>
  );
}

export default Main;