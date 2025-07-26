import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
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
    <nav className="glass-effect sticky top-0 z-50 mx-4 mt-4 rounded-2xl card-shadow">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Garden Tools
              </span>
              <span className="text-xs text-gray-700 font-medium">Grow & Calculate</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" currentPath={location.pathname}>
              <Sparkles className="w-4 h-4 mr-2" />
              Calculator
            </NavLink>
            <NavLink to="/design-ideas" currentPath={location.pathname}>
              <Sparkles className="w-4 h-4 mr-2" />
              Designs
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-800 hover:text-gray-900 hover:bg-white/20 transition-all duration-200 focus-ring"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 pb-4 space-y-2">
          <MobileNavLink to="/" currentPath={location.pathname}>
            <Sparkles className="w-4 h-4 mr-2" />
            Weight Calculator
          </MobileNavLink>
          <MobileNavLink to="/design-ideas" currentPath={location.pathname}>
            <Sparkles className="w-4 h-4 mr-2" />
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
      className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
        isActive 
          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg" 
          : "text-gray-800 hover:text-gray-900 hover:bg-white/20"
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
      className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
        isActive 
          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
          : "text-gray-800 hover:text-gray-900 hover:bg-white/20"
      }`}
    >
      {children}
    </Link>
  );
}
