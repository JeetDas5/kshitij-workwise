import Footer from "../components/global/Footer"
import Header from "../components/global/Header"
import { ChevronDown, Upload, Trash2, PlusCircle, ClipboardList } from 'lucide-react';

export default function RfqCreation(){
    return (
        <>
            <Header/>
            <div className="bg-white border-indigo-900/30">
                <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center gap-3 justify-center">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <ClipboardList className="w-8 h-8 text-black" />
                    </div>
                    <h1 className="text-xl font-medium text-transparent bg-clip-text text-black">
                    RFQ Creation
                    </h1>
                </div>
                </div>
            </div>
            <div className="rounded-2xl border shadow-xl shadow-black/10 overflow-hidden">
                <div className="p-8 border-b border-gray-200 flex flex-col items-center justify-center w-max md:flex-row md:w-full md:justify-between">
                <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-left md:border-r-2">
                <h2 className="text-xl font-bold text-gray-600 mb-4">Select Project</h2>
                <div className="relative w-auto">
                <select className="w-3/4 appearance-none bg-slate-50 border border-indigo-900/50 rounded-lg p-4 mb-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-center cursor-pointer">
                    <option value="">Select a project</option>
                </select>
                <ChevronDown className="absolute right-15 top-1/2 -translate-y-3/4 w-5 h-5 text-indigo-400 cursor-pointer" />
                </div>
                </div>
                <h2 className="text-xl font-bold text-gray-600 hidden md:block m-2">Review Products</h2>
                </div>
                <button className="flex items-center gap-2 px-5 py-3 bg-[#4f46e5] text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                <PlusCircle className="w-4 h-4" />
                    Add More Products
                </button>
                </div>

                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-gray-600">
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Name Of Product</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Size & Specifications</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Quantity</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Technical Datasheet (TDS)</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Quality Assurance Plan(QAP)</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Product Comments</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Selected Vendors</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Action</th>
                        <th className="px-6 py-4 text-left text-sm font-medium border-2">Technical Evaluation</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-900/30">
                    <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-600">ITEM</td>
                        <td className="px-6 py-4">
                        <div className="flex gap-2 items-left flex-col">
                            <input
                            type="text"
                            placeholder="Grade, Material and other specs"
                            className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-48 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            />
                        <span className="text-sm text-gray-500 font-medium">OR</span>
                        <input type="file" className=" text-indigo-500 p-4 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium w-60 border-2">
                        </input>
                        <div className="flex items-center gap-2 bg-indigo-50 w-max p-2 text-sm font-medium rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-600">
                        <Upload className="w-4 h-4" />
                        <p>Upload TDS</p>
                        </div>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <div className="flex flex-col gap-2">
                            <input
                            type="number"
                            placeholder="Quantity"
                            className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-32 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            />
                            <input
                            type="number"
                            placeholder="Unit"
                            className="px-3 py-2 border border-indigo-900/50 rounded-lg text-sm w-32 text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            />
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <input type="file" className=" text-indigo-500 p-4 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium w-60 border-2 mb-2">
                        </input>
                        <div className="flex items-center gap-2 bg-indigo-50 w-max p-2 text-sm font-medium rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-600">
                        <Upload className="w-4 h-4" />
                        <p>Upload TDS</p>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <input type="file" className=" text-indigo-500 p-4 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium w-60 border-2 mb-2">
                        </input>
                        <div className="flex items-center gap-2 bg-indigo-50 w-max p-2 text-sm font-medium rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-600">
                        <Upload className="w-4 h-4" />
                        <p>Upload QAP</p>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <input
                            type="text"
                            className="px-4 py-2 border border-indigo-900/50 rounded-lg text-sm transition-all duration-200 font-medium text-gray-600"
                            placeholder="Add Comments"
                        />
                        </td>
                        <td className="px-6 py-4">
                        <button className="text-sm text-indigo-400 font-medium hover:text-indigo-500">
                            View selected vendors
                        </button>
                        </td>
                        <td className="px-6 py-4">
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-red-400 hover:text-red-300 font-medium">
                            <Trash2 className="w-4 h-4" />
                            Remove
                            </button>
                            <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-indigo-400 hover:text-indigo-500 font-medium">
                            <PlusCircle className="w-4 h-4" />
                            Add variant
                            </button>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <button className="flex items-center gap-1.5 px-4 py-2 border text-indigo-500 bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 text-sm font-medium">
                            <PlusCircle className="w-4 h-4" />
                            Add Clauses
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                </div>
            </div>
            <Footer/>
        </>
    )
}