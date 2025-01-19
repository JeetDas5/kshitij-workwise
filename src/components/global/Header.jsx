import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Bell,
  User,
  FileText,
  Settings,
  Menu,
  Grid2x2,
  Search,
  ChartNoAxesGantt,
  FilePlus2
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "../ui/navigation-menu";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    { id: 1, message: "New RFQ received" },
    { id: 2, message: "Dashboard report updated" },
    { id: 3, message: "Quote comparison completed" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.webp" alt="workwise logo" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
          <NavItem to="/" icon={<FileText className="w-4 h-4 mr-1.5" />}>
              Home
            </NavItem>

          <NavItem
              to="/dashboard"
              icon={<Grid2x2 className="w-4 h-4 mr-1.5" />}
            >
            Dashboard
            </NavItem>
        <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-600">
            <FileText className="w-4 h-4 mr-1.5" />
            RFQ
          </NavigationMenuTrigger>
          <NavigationMenuContent className="text-left bg-white text-gray-600">
            <NavItem to="/rfq-management" icon={<ChartNoAxesGantt />}>
              Manage
            </NavItem>
            <br /><hr/>
            <NavItem to="/rfq-creation" icon={<FilePlus2 />}>
              Creation
            </NavItem>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavItem
              to="/search-vendor"
              icon={<Search className="w-4 h-4 mr-1.5" />}
            >
             Search Vendor
            </NavItem>
      </NavigationMenuList>
    </NavigationMenu>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              className="p-2 text-slate-600 hover:text-indigo-600 relative"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            {notificationsOpen && (
              <div className="absolute top-12 right-0 w-80 bg-white shadow-lg border border-slate-200 rounded-lg p-4 z-20">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  Notifications
                </h4>
                <ul>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <li
                        key={notification.id}
                        className="text-slate-700 py-2 border-b last:border-none"
                      >
                        {notification.message}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 py-2">
                      No new notifications
                    </li>
                  )}
                </ul>
              </div>
            )}

            <button className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Username</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2 flex flex-col justify-center items-center">
            <NavItem
              to="/rfq-management"
              icon={<FileText className="w-4 h-4 mr-1.5" />}
            >
              RFQ management
            </NavItem>
            <NavItem
              to="/dashboard"
              icon={<Settings className="w-4 h-4 mr-1.5" />}
            >
              Dashboard
            </NavItem>
            <NavItem
              to="/search-vendor"
              icon={<Search className="w-4 h-4 mr-1.5" />}
            >
             Search Vendor
            </NavItem>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
