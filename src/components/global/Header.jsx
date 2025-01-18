import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-500 font-semibold border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-500";

  return (
    <div className="flex justify-between items-center border-2 p-2 m-4 border-black rounded-lg h-16 font-poppins">
      <div className="font-bold text-xl">
        <img src="/logo.webp" alt="logo" className="h-12 w-auto"/>
      </div>
      <div className="flex gap-4 text-lg">
        <Link to="/home" className={isActive("/home")}>
          Home
        </Link>
        <Link to="/dashboard" className={isActive("/dashboard")}>
          Dashboard
        </Link>
        <Link to="/rfq-creation" className={isActive("/rfq-creation")}>
          RFQ Creation
        </Link>
        <Link to="/rfq-management" className={isActive("/rfq-management")}>
          RFQ Management
        </Link>
        <Link to="/search-vendors" className={isActive("/search-vendor")}>
          Search Vendors
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <span>User</span>
      </div>
    </div>
  );
}
