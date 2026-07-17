import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, User, Home, Settings, Moon, Sun, Menu, X   } from "lucide-react";

function Header() {
    
  const [theme, setTheme] = useState("light");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
     localStorage.setItem("theme", theme);
  }, [theme]);
    
  return (
    <header>
          <nav class="relative bg-gray-100 dark:bg-gray-900 text-white shadow-md">
          
         
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 justify-between">
        {/* Toggle Menu hiddden after md*/}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="p-1 rounded md:hidden me-auto">
            {toggleMenu ? (
              <X className="text-2xl text-gray-500 dark:text-gray-100" />
            ) : (
              <Menu className="text-2xl text-gray-500 dark:text-gray-100" />
            )}
          </button>
        
        {/* Logo */}
        <h1 className="mx-auto text-2xl font-bold text-blue-400 md:me-16 md:ms-0" title="Home">
          <Link to="/">Data</Link>
        </h1>

        {/* Navigation */}
        <div className={`${toggleMenu ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 md:static md:block md:w-auto`}>  
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-0 text-lg">
          <Link to="/" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Home">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="About">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Contact">Contact</Link>
          <Link to="/adddata" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Add Data">Add Data</Link>
          <Link to="/managedata" className="text-gray-800 hover:text-blue-400 transition duration-300 dark:text-gray-100" title="Manage Data">Manage Data</Link>
        </nav>
        </div>
          
        {/* Dark Light Mode btn */}
        <div className="ms-auto">
          <button onClick={() => setTheme("dark")} className="p-1 rounded dark:hidden" title="Dark Mode"><Moon className="text-2xl text-gray-500" /></button>
          <button onClick={() => setTheme("light")} className="p-1 rounded hidden dark:block" title="Light Mode"><Sun className="text-2xl text-gray-500" /></button>
        </div>
     </div>
               </nav>
    </header>
  );
}

export default Header;