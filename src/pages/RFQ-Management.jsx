import { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Eye,
  PlusCircle,
  FileText,
  Clock,
  Calendar,
  Bell,
} from "lucide-react";
import rfqData from "../data/rfq-data.json";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Link, useNavigate } from "react-router-dom";

const StatCard = ({ title, value, change, negative, positive }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:border-indigo-600 transition-colors">
      <h3 className="text-sm font-medium text-slate-500 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        <span
          className={`text-sm font-medium ${
            negative
              ? "text-red-600"
              : positive
              ? "text-green-600"
              : "text-green-600"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

const SelectBox = ({ label, options, onChange, value }) => {
  return (
    <div className="relative">
      <select
        className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        value={value}
        onChange={onChange}
      >
        <option>Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const statusStyles = {
    active: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const RFQTable = ({ data }) => {
  const navigate = useNavigate();

  const handleViewClick = (id) => {
    
    navigate(`/rfq-management-details?rfqId=${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                RFQ Details
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Timeline
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((rfq) => (
              <tr
                key={rfq.id}
                className="group hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        #{rfq.id}
                      </div>
                      <div className="text-sm text-slate-500">
                        {rfq.product}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="w-4 h-4 mr-1.5 text-slate-400" />
                      Published: {rfq.publishedDate}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Calendar className="w-4 h-4 mr-1.5 text-slate-400" />
                      End Date: {rfq.endDate}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-slate-600">
                    <div>{rfq.type}</div>
                    <div className="text-xs text-slate-500">
                      RA: {rfq.reverseAuction}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={rfq.status} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button
                      className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                      onClick={() => handleViewClick(rfq.id)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                      Queries
                    </button>
                    <button className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition-colors flex items-center">
                      <Bell className="w-3 h-3 mr-1" />
                      Send Reminder
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RFQManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rfqType, setRfqType] = useState("");
  const [status, setStatus] = useState("");
  const [filteredData, setFilteredData] = useState(rfqData.rfqs);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    filterData(query, rfqType, status);
  };

  const handleFilter = () => {
    filterData(searchQuery, rfqType, status);
  };

  const filterData = (searchQuery, rfqType, status) => {
    const filtered = rfqData.rfqs.filter((rfq) => {
      const matchesSearch =
        rfq.id.toLowerCase().includes(searchQuery) ||
        rfq.product.toLowerCase().includes(searchQuery);
      const matchesType = rfqType
        ? rfq.type.toLowerCase() === rfqType.toLowerCase()
        : true;
      const matchesStatus = status
        ? rfq.status.toLowerCase() === status.toLowerCase()
        : true;
      return matchesSearch && matchesType && matchesStatus;
    });

    setFilteredData(filtered);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Active RFQs" value="24" change="+12%" />
        <StatCard title="Pending Quotes" value="156" change="-8%" negative />
        <StatCard title="Total Projects" value="45" change="+5%" />
        <StatCard
          title="Avg. Response Time"
          value="2.4 days"
          change="-15%"
          positive
        />
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          RFQ Management
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-white text-slate-700 rounded-lg shadow-sm border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <Link to="/rfq-creation" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors flex items-center space-x-2">
            <PlusCircle className="w-4 h-4" />
            <span>Create RFQ</span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by RFQ No, Project, or Product..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <SelectBox
            label="RFQ Type"
            options={["Budgetary", "Firm"]}
            value={rfqType}
            onChange={(e) => setRfqType(e.target.value)}
          />
          <SelectBox
            label="Status"
            options={["Active", "Pending", "Completed"]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      </div>

      <RFQTable data={filteredData} />
      <Footer/>
    </main>
  );
};

export default RFQManagement;
