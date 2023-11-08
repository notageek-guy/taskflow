"use client";

import React, { memo } from "react";
import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";

interface IData {
  id: string;
  title: string;
  description: string | TrustedHTML; // Assuming TrustedHTML is a specific type you are using for description
  isCompleted: boolean;
  isImportant: boolean;
  date: string;
  userId: string;
}

interface ITasks {
  title: string;
  data: IData[];
}

const Tasks: React.FC<ITasks> = ({ title, data }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <CreateTask />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default memo(Tasks);
