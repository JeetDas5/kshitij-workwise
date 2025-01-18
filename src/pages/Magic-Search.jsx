import { useState } from "react";
import { Upload, Download, Wand2 } from "lucide-react";

function MagicSearch() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile?.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      droppedFile?.type === "application/vnd.ms-excel"
    ) {
      setFile(droppedFile);
    }
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-sky-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 flex items-center justify-center gap-3">
            Magic Search
          </h1>
          <p className="text-blue-700 text-lg">
            Transform your BOQ into RFQs instantly
          </p>
        </div>
        <div className="space-y-12">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                1
              </span>
              Download Template
            </h2>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all transform hover:scale-105">
              <Download className="w-5 h-5" />
              Download BOQ Template
            </button>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                2
              </span>
              Upload Your File
            </h2>

            <div
              className={`
                relative border-2 border-dashed rounded-2xl p-12 text-center
                transition-all cursor-pointer
                ${
                  isDragging
                    ? "border-blue-600 bg-blue-50"
                    : "border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                }
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".xlsx,.xls"
                onChange={handleFileInput}
              />

              <div className="flex flex-col items-center gap-4">
                <Upload
                  className={`w-16 h-16 ${
                    isDragging ? "text-blue-600" : "text-blue-400"
                  }`}
                />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-blue-900">
                    {file
                      ? `Selected: ${file.name}`
                      : "Drop your Excel file here or click to browse"}
                  </p>
                  <p className="text-sm text-blue-600">
                    Supports Excel files (.xlsx, .xls)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className={`
                px-8 py-4 text-lg font-semibold rounded-xl shadow-lg
                transition-all transform hover:scale-105
                ${
                  file
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }
              `}
              disabled={!file}
            >
              <span className="flex items-center gap-2">
                <Wand2 className="w-5 h-5" />
                Generate RFQs Automatically
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagicSearch;
