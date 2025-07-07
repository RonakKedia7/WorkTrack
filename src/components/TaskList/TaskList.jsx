import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({ tasks, employeeData }) => {
  return (
    <div className="mt-10 overflow-x-auto w-full py-5 px-4 flex gap-6 snap-x scroll-smooth bg-slate-800 rounded-xl p-5 scrollbar-custom">
      {tasks.map((task) => {
        if (task.active) {
          return (
            <AcceptTask
              key={task.taskDescription || task.taskTitle}
              task={task}
              employeeData={employeeData}
            />
          );
        }
        if (task.completed) {
          return <CompletedTask key={task.id || task.taskTitle} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={task.id || task.taskTitle} task={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
