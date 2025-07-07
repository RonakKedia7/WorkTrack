import { useState } from "react";
import Footer from "../Others/Footer";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-14 sm:py-20">
        {/* App Name Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-tight animate-[pulse_3s_ease-in-out_infinite]">
          WorkTrack
        </h1>

        {/* Login Card */}
        <div className="w-full max-w-md bg-slate-800/60 border border-indigo-600/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl backdrop-blur-lg backdrop-saturate-150 transition-all duration-300 hover:shadow-indigo-800/40 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text tracking-tight">
            Welcome Back 👋
          </h2>

          <form onSubmit={submitHandler} className="flex flex-col space-y-5">
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-900/50 text-white border border-indigo-600/40 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-slate-400/70 transition-all duration-200 hover:border-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-900/50 text-white border border-indigo-600/40 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-slate-400/70 transition-all duration-200 hover:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-95"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Join <span className="text-indigo-400 font-medium">WorkTrack</span>{" "}
            to streamline your team’s productivity and management.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
