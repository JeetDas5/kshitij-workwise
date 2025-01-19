import { useEffect, useState } from "react";
import { FileText, Calendar, Building2, Mail, Phone } from "lucide-react";
import rfqsData from "../data/rfq-details.json";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/global/Loader";

const RFQManagementDetails = ()=> {
  const [rfq, setRfq] = useState(null);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const rfqId = searchParams.get("rfqId");

    if (!rfqId) {
      setError("Please provide an RFQ ID in the URL (e.g., ?rfqId=402535)");
      return;
    }

    const rfqData = rfqsData[rfqId];
    if (!rfqData) {
      setError(`RFQ with ID ${rfqId} not found`);
      return;
    }

    setRfq(rfqData);
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-100">
          <h1 className="text-2xl font-semibold text-red-600">{error}</h1>
        </div>
      </div>
    );
  }

  if (!rfq) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="text-2xl font-semibold text-sky-900">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-sky-900 flex items-center gap-2 ml-5">
            RFQ Management
          </h1>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Queries
            </button>
            <button className="px-6 py-2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-lg transition-colors">
              No Quotes Received
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-100">
          <h2 className="text-2xl font-semibold text-sky-900 mb-8">
            RFQ #{rfq.id} details
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-100">
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    Name Of Product
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    Size & Specifications
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    Quantity
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    Current Lowest
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    TDS
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    QAP
                  </th>
                  <th className="text-left py-4 px-4 text-blue-600 font-medium">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                {rfq.products.map((product, index) => (
                  <tr key={index} className="text-sky-900">
                    <td className="py-4 px-4">{product.name}</td>
                    <td className="py-4 px-4">
                      <div>
                        <p>Size: {product.size}</p>
                        <p>Spec: {product.specification}</p>
                        {product.hasAttachments && (
                          <button className="mt-2 text-sm text-blue-600 hover:text-blue-700">
                            File Attachments
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4">{product.quantity}</td>
                    <td className="py-4 px-4">{product.currentLowest}</td>
                    <td className="py-4 px-4">{product.tds}</td>
                    <td className="py-4 px-4">{product.qap}</td>
                    <td className="py-4 px-4">{product.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Name
                </label>
                <input
                  type="text"
                  value={rfq.contact.companyName}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Contact Person
                </label>
                <input
                  type="text"
                  value={rfq.contact.contactPerson}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  type="text"
                  value={rfq.contact.email}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Number
                </label>
                <input
                  type="text"
                  value={rfq.contact.phone}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <span>Reverse Auction</span>
                </label>
                <input
                  type="text"
                  value={rfq.reverseAuction}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-blue-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Procurement End Date
                </label>
                <input
                  type="text"
                  value={rfq.procurementEndDate}
                  readOnly
                  className="w-full bg-white border border-blue-100 rounded-lg px-4 py-2 text-sky-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-sky-900 mb-4">
                Terms & Conditions
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-sky-900">
                {rfq.terms.map((term, index) => (
                  <li key={index} className="leading-relaxed">
                    <span className="font-medium">{term.title}:</span>{" "}
                    {term.description}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RFQManagementDetails;
