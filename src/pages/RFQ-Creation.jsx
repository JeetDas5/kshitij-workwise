import { useState, useEffect } from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { ChevronDown, Trash2, PlusCircle, ClipboardList } from "lucide-react";
import productsData from "../data/create-rfq-data.json";

export default function RfqCreation() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addRow = () => {
    setProducts([
      ...products,
      {
        name: "",
        specifications: "",
        quantity: "",
        unit: "",
        tds: null,
        qap: null,
        clause: null,
        comments: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const updateRow = (index, field, value) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <Header />
      <div className="bg-white border-indigo-900/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <ClipboardList className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-xl font-medium bg-clip-text text-black">
              RFQ Creation
            </h1>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border shadow-xl shadow-black/10 overflow-hidden">
        <div className="p-8 border-b border-gray-200 flex flex-col items-center justify-center w-max md:flex-row md:w-full md:justify-between">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-left md:border-r-2">
              <h2 className="text-xl font-bold text-gray-600 mb-4">
                Select Project
              </h2>
              <div className="relative w-auto">
                <select className="w-3/4 appearance-none bg-slate-50 border border-indigo-900/50 rounded-lg p-4 mb-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-center cursor-pointer">
                  <option value="">Select a project</option>
                </select>
                <ChevronDown className="absolute right-15 top-1/2 -translate-y-3/4 w-5 h-5 text-indigo-400 cursor-pointer" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-600 hidden md:block m-2">
              Review Products
            </h2>
          </div>
          <button
            onClick={addRow}
            className="flex items-center gap-2 px-5 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            <PlusCircle className="w-4 h-4" />
            Add More Products
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-600">
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Name Of Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Size & Specifications
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Quantity
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Technical Datasheet (TDS)
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Quality Assurance Plan (QAP)
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Add Clause
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Product Comments
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium border-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-900/30">
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => updateRow(index, "name", e.target.value)}
                      placeholder="Product Name"
                      className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-48 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={product.specifications}
                      onChange={(e) =>
                        updateRow(index, "specifications", e.target.value)
                      }
                      placeholder="Specifications"
                      className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-48 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        updateRow(index, "quantity", e.target.value)
                      }
                      placeholder="Quantity"
                      className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-32 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="file"
                      onChange={(e) =>
                        updateRow(index, "tds", e.target.files[0])
                      }
                      className="text-indigo-500 p-4 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium w-60 border-2"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="file"
                      onChange={(e) =>
                        updateRow(index, "qap", e.target.files[0])
                      }
                      className="text-indigo-500 p-4 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium w-60 border-2"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={product.clause}
                      placeholder="Add Clause"
                      onChange={(e) =>
                        updateRow(index, "comments", e.target.value)
                      }
                      className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={product.comments}
                      onChange={(e) =>
                        updateRow(index, "comments", e.target.value)
                      }
                      placeholder="Comments"
                      className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeRow(index)}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#f97316] hover:text-[#f67c63e2] font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
