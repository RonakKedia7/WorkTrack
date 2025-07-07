import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { MdDeleteForever } from "react-icons/md";

const bgGradients = [
  "bg-gradient-to-br from-blue-600 to-blue-800",
  "bg-gradient-to-br from-rose-600 to-rose-800",
  "bg-gradient-to-br from-teal-600 to-teal-800",
  "bg-gradient-to-br from-amber-600 to-amber-800",
  "bg-gradient-to-br from-emerald-600 to-emerald-800",
  "bg-gradient-to-br from-violet-600 to-violet-800",
  "bg-gradient-to-br from-slate-700 to-slate-900",
];

const AllTask = () => {
  const { employees, updateEmployees } = useContext(AuthContext);

  const deleteTask = (emp, task) => {
    // Use unique task id for deletion
    const newTasks = emp.tasks.filter((t) => t !== task);

    const updatedTaskCount = {
      active: newTasks.filter((t) => t.active).length,
      completed: newTasks.filter((t) => t.completed).length,
      failed: newTasks.filter((t) => t.failed).length,
    };
    const newEmpData = { ...emp, tasks: newTasks, taskCount: updatedTaskCount };

    const newEmployeesData = employees.map((e) =>
      e.id === emp.id ? newEmpData : e
    );

    // Update context and localStorage via setter
    updateEmployees(newEmployeesData);
  };

  return (
    <div className="w-full bg-slate-800 text-white mt-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-10 rounded-3xl max-h-[92vh] shadow-2xl overflow-y-auto scrollbar-hide">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center text-gray-100 tracking-tight">
        All Employees
      </h2>

      {employees.length === 0 ? (
        <p className="text-center text-gray-400 text-lg sm:text-xl">
          No employees found.
        </p>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {employees.map((emp, index) => {
            const bg = bgGradients[index % bgGradients.length];
            return (
              <div
                key={emp.id}
                className={`rounded-2xl p-5 sm:p-6 shadow-xl ${bg} border border-gray-700/50 relative`}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {emp.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200">
                      {emp.email}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300">
                      ID: {emp.id}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 sm:mt-9 sm:text-sm text-[11px]">
                    <div className="px-3 py-1.5 rounded-lg bg-yellow-400 text-gray-900 font-semibold shadow">
                      Active: {emp.taskCount.active}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-green-400 text-gray-900 font-semibold shadow">
                      Completed: {emp.taskCount.completed}
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-red-400 text-white font-semibold shadow">
                      Failed: {emp.taskCount.failed}
                    </div>
                  </div>
                </div>

                {/* Task details */}
                <div className="space-y-4">
                  {emp.tasks.map((task) => (
                    <div
                      key={task.taskDescription || task.taskTitle}
                      className="bg-gray-800/80 p-4 sm:p-5 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                    >
                      <div className="flex justify-between items-center mb-2 gap-2">
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          {task.taskTitle}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-3 py-1 text-xs sm:text-sm rounded-md font-medium ${
                              task.active
                                ? "bg-yellow-400 text-gray-900"
                                : task.completed
                                ? "bg-green-400 text-gray-900"
                                : task.failed
                                ? "bg-red-400 text-white"
                                : "bg-gray-500 text-white"
                            }`}
                          >
                            {task.active
                              ? "Active"
                              : task.completed
                              ? "Completed"
                              : task.failed
                              ? "Failed"
                              : "Unknown"}
                          </span>
                          <button
                            onClick={() => deleteTask(emp, task)}
                            className="text-gray-200 hover:text-gray-300 transition-colors"
                          >
                            <MdDeleteForever className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 mb-3">
                        {task.taskDescription}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-400 gap-1 sm:gap-0">
                        <span>📅 {task.taskDate}</span>
                        <span>🗂 {task.category}</span>
                        <span>⚡ {task.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllTask;
