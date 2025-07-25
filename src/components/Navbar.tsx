import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [{ name: "Weight Calculator", path: "/" }];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-lime-100 shadow-md px-4 py-3 md:px-8 h-20 flex rounded-xl">
      <div className="w-full mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-lime-800">
          🌻Weight Calculator (GAG)
        </Link>

        <div className="md:hidden">
          <button
            className="text-lime-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className={`px-3 py-1 rounded-xl transition-all ${
                  isActive(path)
                    ? "bg-lime-300 text-lime-900 font-semibold"
                    : "hover:bg-lime-200 text-lime-800"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="mt-3 md:hidden space-y-2">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block w-full px-4 py-2 rounded-xl ${
                  isActive(path)
                    ? "bg-lime-300 text-lime-900 font-semibold"
                    : "hover:bg-lime-200 text-lime-800"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
