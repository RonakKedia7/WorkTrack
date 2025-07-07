import { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { employees, admins } = useContext(AuthContext);

  const [user, setUser] = useState(null); // 'admin' | 'employee' | null
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Load user from localStorage if available
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      const { role, data } = JSON.parse(stored);
      setUser(role);
      setLoggedInUserData(data);
    }
  }, []);

  // Refresh loggedInUserData from context when needed (e.g., after task update)
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored && employees.length && admins.length) {
      const { role, data } = JSON.parse(stored);
      const updated =
        role === "employee"
          ? employees.find((emp) => emp.id === data.id)
          : admins.find((adm) => adm.id === data.id);

      setLoggedInUserData(updated || data); // fallback to old if somehow missing
    }
  }, [employees, admins]);

  const handleLogin = (email, password) => {
    const matchedEmployee = employees.find(
      (emp) => emp.email === email && emp.password === password
    );
    const matchedAdmin = admins.find(
      (adm) => adm.email === email && adm.password === password
    );

    if (matchedAdmin) {
      const data = { role: "admin", data: matchedAdmin };
      setUser("admin");
      setLoggedInUserData(matchedAdmin);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
    } else if (matchedEmployee) {
      const data = { role: "employee", data: matchedEmployee };
      setUser("employee");
      setLoggedInUserData(matchedEmployee);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard employeeData={loggedInUserData} />
      )}
      {user === "admin" && loggedInUserData && (
        <AdminDashboard adminData={loggedInUserData} />
      )}
    </>
  );
};

export default App;
