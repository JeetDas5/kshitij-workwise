import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RfqCreation from "./pages/RFQ-Creation";
import RfqManagement from "./pages/RFQ-Management";
import RfqManagementDetails from "./pages/RFQ-Management-details";
import MagicSearch from "./pages/Magic-Search";
import VendorSearch from "./pages/Vendor-Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rfq-creation" element={<RfqCreation />} />
        <Route path="/rfq-management" element={<RfqManagement />} />
        <Route
          path="/rfq-management-details"
          element={<RfqManagementDetails />}
        />
        <Route path="/magic-search" element={<MagicSearch />} />
        <Route path="/search-vendor" element={<VendorSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
