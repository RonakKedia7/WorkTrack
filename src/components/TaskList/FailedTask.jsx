import React from "react";

const FailedTask = ({ task }) => {
  // Conditional styling for priority tag
  const priorityStyles = {
    High: "bg-gradient-to-r from-red-500 to-red-700 text-white",
    Medium: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900",
    Low: "bg-gradient-to-r from-green-400 to-green-600 text-white",
  };

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[370px] bg-gradient-to-br from-rose-700 to-rose-800 text-gray-100 rounded-2xl shadow-xl p-6 hover:shadow-2xl snap-center flex flex-col">
      <div className="flex flex-col gap-2 mb-4 md:flex-row md:gap-1 justify-between items-center ">
        <span
          className={`text-xs sm:text-sm px-3 py-1 rounded-full font-semibold ${
            priorityStyles[task.priority] || "bg-gray-500 text-white"
          }`}
        >
          {task.priority || "No Priority"}
        </span>
        <span className="text-xs sm:text-sm px-3 py-1 rounded-full font-semibold bg-gradient-to-r from-gray-500 to-gray-700 text-white">
          {task.category || "No Category"}
        </span>
        <span className="text-sm sm:text-base font-medium text-gray-300">
          {task.taskDate || "No Date"}
        </span>
      </div>

      <h2 className="mt-5 text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight">
        {task.taskTitle || "Untitled Task"}
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed flex-1 overflow-auto">
        {task.taskDescription || "No description"}
      </p>

      <div className="flex gap-3 mt-auto pt-6">
        <button className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm sm:text-base ">
          Failed!
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
