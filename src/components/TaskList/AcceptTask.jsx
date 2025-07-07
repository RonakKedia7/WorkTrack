import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ task, employeeData }) => {
  const priorityStyles = {
    High: "bg-gradient-to-r from-red-500 to-red-700 text-white",
    Medium: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900",
    Low: "bg-gradient-to-r from-green-400 to-green-600 text-white",
  };

  const bgColors = [
    "bg-gradient-to-br from-indigo-600 to-indigo-700",
    "bg-gradient-to-br from-pink-600 to-pink-700",
    "bg-gradient-to-br from-cyan-600 to-cyan-700",
    "bg-gradient-to-br from-yellow-500 to-orange-600",
    "bg-gradient-to-br from-purple-500 to-fuchsia-600",
    "bg-gradient-to-br from-sky-500 to-blue-700",
  ];

  const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  const { employees, updateEmployees } = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    // Prepare updated task object
    const updatedTask = {
      ...task,
      active: false,
      completed: status === "completed",
      failed: status === "failed",
    };

    // Update the tasks array immutably
    const updatedTasks = employeeData.tasks.map((t) =>
      t.taskTitle === updatedTask.taskTitle &&
      t.taskDescription === updatedTask.taskDescription
        ? updatedTask
        : t
    );

    // Recalculate task counts
    const updatedTaskCount = {
      active: updatedTasks.filter((t) => t.active).length,
      completed: updatedTasks.filter((t) => t.completed).length,
      failed: updatedTasks.filter((t) => t.failed).length,
    };

    // Create updated employee object
    const updatedEmployee = {
      ...employeeData,
      tasks: updatedTasks,
      taskCount: updatedTaskCount,
    };

    // Update employees list immutably
    const updatedEmployees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );

    // Update context and localStorage via setter
    updateEmployees(updatedEmployees);
  };

  return (
    <div
      className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[370px] ${randomBgColor} text-gray-100 rounded-2xl shadow-xl p-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl snap-center flex flex-col`}
    >
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

      <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-bold leading-snug tracking-tight">
        {task.taskTitle || "Untitled Task"}
      </h2>

      <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed flex-1 overflow-auto">
        {task.taskDescription || "No description"}
      </p>

      <div className="flex gap-3 mt-auto pt-6">
        <button
          onClick={() => updateTaskStatus("completed")}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm sm:text-base active:scale-95"
        >
          Completed
        </button>
        <button
          onClick={() => updateTaskStatus("failed")}
          className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm sm:text-base active:scale-95"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
