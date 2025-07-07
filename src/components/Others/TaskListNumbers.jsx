import React from "react";

const TaskListNumbers = ({ taskCount }) => {
  const tasks = [
    {
      count: taskCount.active + taskCount.completed + taskCount.failed,
      label: "Total Tasks",
      color: "bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-600",
    },
    {
      count: taskCount.active,
      label: "Ongoing Task",
      color: "bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600",
    },
    {
      count: taskCount.completed,
      label: "Completed Task",
      color: "bg-gradient-to-r from-green-500 via-green-500 to-green-600",
    },
    {
      count: taskCount.failed,
      label: "Failed Task",
      color: "bg-gradient-to-r from-red-500 via-red-500 to-red-600",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-white w-full bg-slate-800 rounded-xl p-5">
      {tasks.map((task, idx) => (
        <div
          key={idx}
          className={`rounded-xl py-6 px-6 sm:px-8 ${task.color} shadow-md transition-all duration-200 hover:scale-[1.03]`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{task.count}</h2>
          <h3 className="text-lg sm:text-xl font-medium">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
