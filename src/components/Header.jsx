import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
     localStorage.setItem("theme", theme);
  }, [theme]);
    
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400" title="Home">
          <Link to="/">Data</Link>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg">
          <Link to="/" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Home">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="About">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Contact">Contact</Link>
          <Link to="/adddata" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Add Data">Add Data</Link>
          <Link to="/managedata" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Manage Data">Manage Data</Link>
          <button onClick={() => setTheme("dark")} className="p-1 rounded dark:hidden" title="Dark Mode">🌙</button>
          <button onClick={() => setTheme("light")} className="p-1 rounded hidden dark:block" title="Light Mode">☀️</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;