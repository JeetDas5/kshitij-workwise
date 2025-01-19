import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RfqCreation from "./pages/RFQ-Creation";
import RfqManagement from "./pages/RFQ-Management";
import MagicSearch from "./pages/Magic-Search";
import VendorSearch from "./pages/Vendor-Search";
import RFQManagementDetails from "./pages/RFQ-Management-details";

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
          element={<RFQManagementDetails />}
        />
        <Route path="/magic-search" element={<MagicSearch />} />
        <Route path="/search-vendor" element={<VendorSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
