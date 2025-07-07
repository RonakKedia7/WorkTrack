import { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObject = {
      active: true,
      category,
      completed: false,
      failed: false,
      priority,
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      assignTo,
    };

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((employee) => {
      if (assignTo === employee.name) {
        employee.tasks.push(taskObject);
        employee.taskCount.active += 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));
    window.location.reload();

    // Reset form fields
    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
    setPriority("");
  };

  return (
    <div className="w-full bg-slate-900 mt-10">
      <form
        onSubmit={submitHandler}
        className="w-full bg-slate-800 p-8 sm:p-12 md:p-16 rounded-2xl"
      >
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
          Create New Task
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="task-title"
                className="block text-xl font-semibold text-white mb-2"
              >
                Task Title
              </label>
              <input
                autoComplete="off"
                id="task-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="task-date"
                className="block text-xl font-semibold text-white mb-2"
              >
                Date
              </label>
              <input
                id="task-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 text-lg pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition custom-date"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="assign-to"
                className="block text-xl font-semibold text-white mb-2"
              >
                Assign to
              </label>
              <input
                autoComplete="off"
                id="assign-to"
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                placeholder="Employee name"
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-xl font-semibold text-white mb-2"
              >
                Category
              </label>
              <input
                autoComplete="off"
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Design, Dev, etc."
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-required="true"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="priority"
                className="block text-xl font-semibold text-white mb-2"
              >
                Priority
              </label>
              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 pr-12 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition appearance-none cursor-pointer"
                aria-required="true"
              >
                <option value="" disabled>
                  Select Priority
                </option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {/* drodown icon */}
              <div className="absolute right-4 top-1/2 mt-5 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <label
                htmlFor="description"
                className="block text-xl font-semibold text-white mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task details..."
                className="w-full bg-gray-700 text-white border border-indigo-500 rounded-xl px-6 py-4 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
                aria-required="true"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-8 py-4 rounded-xl transition duration-200 shadow-md"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
