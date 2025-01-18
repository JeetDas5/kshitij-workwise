/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, Bell, User, FileText, Settings } from "lucide-react";

function NavItem({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "text-indigo-600 bg-indigo-50"
            : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 text-transparent bg-clip-text">
              <img
                src="/logo.webp"
                alt="workwise logo"
                className="h-12 w-auto"
              />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavItem
              to="/rfq-management"
              icon={<FileText className="w-4 h-4 mr-1.5" />}
            >
              RFQ management
            </NavItem>
            <NavItem
              to="/technical-evaluation"
              icon={<Settings className="w-4 h-4 mr-1.5" />}
            >
              Technical Evaluation
            </NavItem>
            <NavItem
              to="/compare-quotes"
              icon={<BarChart3 className="w-4 h-4 mr-1.5" />}
            >
              Compare quotes
            </NavItem>
          </nav>
          <div className="relative">
            <button
              onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">John Doe</span>
            </button>
            {/* Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavItem
                  to="/rfq-management"
                  icon={<FileText className="w-4 h-4 mr-1.5" />}
                >
                  RFQ management
                </NavItem>
                <NavItem
                  to="/technical-evaluation"
                  icon={<Settings className="w-4 h-4 mr-1.5" />}
                >
                  Technical Evaluation
                </NavItem>
                <NavItem
                  to="/compare-quotes"
                  icon={<BarChart3 className="w-4 h-4 mr-1.5" />}
                >
                  Compare quotes
                </NavItem>
              </div>
            )}
          </div>
          {/* Notification */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-indigo-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
