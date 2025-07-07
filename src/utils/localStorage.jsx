import employees from "./empData";
import admins from "./adminData";

export const setLocalStorage = (data) => {
  if (!data) {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admins", JSON.stringify(admins));
  } else {
    const { employees, admins } = data;
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admins", JSON.stringify(admins));
  }
};

export const getLocalStorage = () => {
  let employeesData = JSON.parse(localStorage.getItem("employees"));
  let adminsData = JSON.parse(localStorage.getItem("admins"));

  return { employees: employeesData, admins: adminsData };
};
