import { Link, useLocation } from "react-router-dom";
import { Menu,UserRound } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-500 font-semibold border-b-2 border-blue-500"
      : "text-gray-700 hover:text-[#5046e5]";

  return (
    <div className="flex justify-between items-center border-2 p-2 m-4 border-black rounded-lg h-16 font-poppins">
      <div className="font-bold text-xl">
        <img src="/logo.webp" alt="logo" className="h-12 w-auto" />
      </div>
      <div className="hidden lg:flex gap-4 text-lg">
        <Link to="/dashboard" className={isActive("/dashboard")}>
          Dashboard
        </Link>
        <Link to="/rfq-creation" className={isActive("/rfq-creation")}>
          RFQ Creation
        </Link>
        <Link to="/rfq-management" className={isActive("/rfq-management")}>
          RFQ Management
        </Link>
        <Link to="/search-vendors" className={isActive("/search-vendors")}>
          Search Vendors
        </Link>
      </div>
      <div className="pr-2">
        <UserRound/>
      </div>

      <div className="lg:hidden">
        <Menu
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        /> 
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col gap-2 z-50">
          <Link
            to="/dashboard"
            className={isActive("/dashboard")}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/rfq-creation"
            className={isActive("/rfq-creation")}
            onClick={() => setIsMenuOpen(false)}
          >
            RFQ Creation
          </Link>
          <Link
            to="/rfq-management"
            className={isActive("/rfq-management")}
            onClick={() => setIsMenuOpen(false)}
          >
            RFQ Management
          </Link>
        </div>
      )}
    </div>
  );
}
