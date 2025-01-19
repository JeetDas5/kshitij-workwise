/* eslint-disable no-unused-vars */
import { useState, useMemo } from "react";
import { Search, MapPin, Star, Plus } from "lucide-react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

const vendorsData = [
  {
    id: 1,
    name: "Diamond Flanges & Fittings",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    certifications: ["ISO 9001", "ISO 14001"],
    specialization: "Industrial Flanges, Steel Fittings",
    description:
      "Leading manufacturer of high-quality industrial flanges and steel fittings with 25+ years of experience.",
    minOrderValue: "₹50,000",
    deliveryTime: "3-5 days",
    products: ["MS Flanges", "Steel Fittings", "Pipe Flanges"],
  },
  {
    id: 2,
    name: "Supreme Steel Works",
    location: "Pune, Maharashtra",
    rating: 4.6,
    certifications: ["ISO 9001"],
    specialization: "Steel Products, Industrial Components",
    description:
      "Specialized in manufacturing premium steel products and industrial components.",
    minOrderValue: "₹25,000",
    deliveryTime: "4-6 days",
    products: ["Steel Flanges", "Industrial Components"],
  },
  {
    id: 3,
    name: "MetalTech Industries",
    location: "Ahmedabad, Gujarat",
    rating: 4.9,
    certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    specialization: "Metal Manufacturing, Industrial Solutions",
    description:
      "State-of-the-art manufacturing facility for metal products and industrial solutions.",
    minOrderValue: "₹75,000",
    deliveryTime: "2-4 days",
    products: ["Metal Flanges", "Industrial Solutions"],
  },
];

const locations = [
  "Mumbai, Maharashtra",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Delhi, NCR",
  "Bangalore, Karnataka",
];

function VendorSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("");

  const filteredVendors = useMemo(() => {
    return vendorsData.filter((vendor) => {
      const matchesSearch =
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.products.some((product) =>
          product.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesLocation =
        !selectedLocation || vendor.location === selectedLocation;
      const matchesCertification =
        !selectedCertification ||
        vendor.certifications.includes(selectedCertification);

      return matchesSearch && matchesLocation && matchesCertification;
    });
  }, [searchTerm, selectedLocation, selectedCertification]);

  return (
    <div className="min-h-screen bg-white">
        <Header/>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Find Verified Vendors
            </h1>
            <p className="text-blue-600">
              Connect with trusted manufacturers and suppliers
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for vendors, products, or services..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-64">
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors appearance-none bg-white"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">
                      {vendor.name}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{vendor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{vendor.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Add to RFQ
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{vendor.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {vendor.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="text-gray-600 mb-1">Min. Order Value</div>
                    <div className="font-semibold text-blue-900">
                      {vendor.minOrderValue}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="text-gray-600 mb-1">Delivery Time</div>
                    <div className="font-semibold text-blue-900">
                      {vendor.deliveryTime}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="text-gray-600 mb-1">Products</div>
                    <div className="font-semibold text-blue-900">
                      {vendor.products.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default VendorSearch;
