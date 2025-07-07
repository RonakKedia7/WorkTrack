import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import Footer from "../Others/Footer";

const AdminDashboard = ({ adminData }) => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 p-4 sm:p-6 md:p-10">
        <Header empName={adminData.name} />
        <CreateTask />
        <AllTask />
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
