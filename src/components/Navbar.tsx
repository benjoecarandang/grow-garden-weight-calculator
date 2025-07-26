import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when navigating or resizing above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    setIsOpen(false); // Close menu on route change

    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  return (
    <nav className="bg-[#7BC47F] shadow-md rounded-xl py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="Logo" className="w-15 h-15" />
            <span className="text-xl font-bold text-white">GAG Tools</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" currentPath={location.pathname}>
              Weight Calculator
            </NavLink>

            <NavLink to="/design-ideas" currentPath={location.pathname}>
              Design Ideas
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white hover:bg-green-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-green-600`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink to="/" currentPath={location.pathname}>
            Weight Calculator
          </MobileNavLink>
          <MobileNavLink to="/design-ideas" currentPath={location.pathname}>
            Design Ideas
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

type NavLinkProps = {
  to: string;
  currentPath: string;
  children: React.ReactNode;
};

function NavLink({ to, currentPath, children }: NavLinkProps) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive ? "text-white !font-extrabold" : "text-green-100 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, currentPath, children }: NavLinkProps) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive ? "text-white font-bold" : "text-green-100 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
