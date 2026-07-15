import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          MyWebsite
        </h1>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg">
          <Link 
            to="/" 
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>

          <Link 
            to="/contact" 
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>

          <Link 
            to="/adddata" 
            className="hover:text-blue-400 transition duration-300"
          >
            Add Data
          </Link>
          <Link 
            to="/managedata" 
            className="hover:text-blue-400 transition duration-300"
          >
            Manage Data
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;