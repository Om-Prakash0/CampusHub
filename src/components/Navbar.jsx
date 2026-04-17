import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const firstName = user?.name?.split(" ")[0] || "User";

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    setUser(null);
  };

  const linkStyle = (path) =>
    `relative px-2 py-1 transition-all duration-300 ${
      location.pathname === path
        ? "text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 dark:text-slate-400 hover:text-indigo-500"
    }`;

  return (
    <>
      {/* 🔥 TOP HEADING */}
      <div className="relative text-center py-5 overflow-hidden shadow-md group">
        
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]"></div>

        <div className="absolute w-40 h-40 bg-pink-400 opacity-30 rounded-full blur-3xl top-[-30px] left-[-30px] animate-pulse group-hover:scale-125 transition duration-500"></div>
        <div className="absolute w-40 h-40 bg-indigo-400 opacity-30 rounded-full blur-3xl bottom-[-30px] right-[-30px] animate-pulse group-hover:scale-125 transition duration-500"></div>

        <h1 className="relative text-3xl font-extrabold text-white tracking-wide transition-all duration-500 group-hover:scale-110 group-hover:tracking-widest">
          KIET Events 🎉
        </h1>
      </div>

      {/* 🔥 NAVBAR */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
        <div className="w-full flex items-center justify-evenly text-sm font-semibold h-14">

          <Link to="/" className={linkStyle("/")}>Discover</Link>

          <Link to="/my-registrations" className={linkStyle("/my-registrations")}>
            My Tickets
          </Link>

          <Link to="/help" className={linkStyle("/help")}>Help</Link>

          <Link to="/find-friend" className={linkStyle("/find-friend")}>
            Find Friend
          </Link>

          <button onClick={toggleTheme} className="text-lg">
            {isDark ? "☀️" : "🌙"}
          </button>

          <Link to="/profile" className={linkStyle("/profile")}>
            Hi, {firstName}
          </Link>

          <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
            Logout
          </button>

        </div>
      </nav>
    </>
  );
}