import React from "react";

import { TaskCard } from "./TaskCard";

export const Content = ({ taskCollection, handleDeleteTask }) => {
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <div className="text-left">
          <h1 className="alert-success text-center">Tasks</h1>
          <h3>The tasks for this interview sample are as follows:</h3>
          {taskCollection &&
            taskCollection.map((task, index) => (
              <TaskCard
                task={task}
                key={index}
                handleDeleteTask={handleDeleteTask}
              />
            ))}
        </div>
      </main>
    </div>
  );
};
