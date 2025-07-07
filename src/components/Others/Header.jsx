const Header = ({ empName }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between text-slate-100 bg-slate-800 p-4 rounded-lg shadow-sm">
      <h1 className="text-xl sm:text-2xl font-medium leading-snug">
        Hello, <br />
        <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          {empName}
        </span>{" "}
        👋
      </h1>
      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md transition duration-200 shadow"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
