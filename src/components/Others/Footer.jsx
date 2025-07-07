import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 pt-15 text-slate-200 py-10 px-4 sm:px-6 lg:px-12 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-8">
          {/* Left Section: Description */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">
              Built with ❤️ by{" "}
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                Ronak Kedia
              </span>
            </p>
            <p className="text-sm sm:text-base text-slate-400 max-w-md">
              Task management app to streamline your workflow and enhance
              productivity. Stay connected for future projects and updates.
            </p>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://github.com/RonakKedia7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 sm:px-4 py-2 rounded-lg transition duration-200 border border-slate-600 hover:border-indigo-500"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 group-hover:text-indigo-400" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/ronak_kedia37"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 sm:px-4 py-2 rounded-lg transition duration-200 border border-slate-600 hover:border-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 group-hover:text-pink-400" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@dhonifan_077"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 sm:px-4 py-2 rounded-lg transition duration-200 border border-slate-600 hover:border-red-500"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 group-hover:text-red-400" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Ronak Kedia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
