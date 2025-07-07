import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import employees from "../utils/empData"; // Default employee data
import admins from "../utils/adminData"; // Default admin data

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admins: [] });

  // Initialize data from localStorage, checking employees and admins separately
  useEffect(() => {
    const data = getLocalStorage();
    const defaultData = { employees, admins };

    // Initialize employees and admins separately
    const newEmployees = data?.employees?.length
      ? data.employees
      : defaultData.employees;
    const newAdmins = data?.admins?.length ? data.admins : defaultData.admins;

    const newData = {
      employees: newEmployees,
      admins: newAdmins,
    };

    // Save to localStorage if either part was initialized with defaults
    if (
      newEmployees === defaultData.employees ||
      newAdmins === defaultData.admins
    ) {
      setLocalStorage(newData);
    }

    setUserData(newData);
  }, []);

  // Setter to update employees (update state and localStorage)
  const updateEmployees = (updatedEmployees) => {
    try {
      setUserData((prev) => {
        const newData = { ...prev, employees: updatedEmployees };
        setLocalStorage(newData); // Save to localStorage
        return newData;
      });
    } catch (error) {
      console.error("Error updating employees:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        employees: userData.employees,
        admins: userData.admins,
        updateEmployees,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
