import Footer from "../Others/Footer";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ employeeData }) => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 p-4 sm:p-6 md:p-10">
        <Header empName={employeeData.name} />
        <TaskListNumbers taskCount={employeeData.taskCount} />
        <TaskList tasks={employeeData.tasks} employeeData={employeeData} />
      </div>
      <Footer />
    </>
  );
};

export default EmployeeDashboard;
