import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";
import { LineChart, ShoppingCart, CheckSquare, XSquare } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  newRFQs: [3, 5, 4, 6, 4, 2, 3],
  closedRFQs: [2, 3, 2, 4, 3, 1, 2],
  completedRFQs: [1, 2, 3, 2, 4, 1, 1],
  quotesReceived: [4, 6, 5, 7, 5, 3, 4],
};

function Dashboard() {
  const [chartType, setChartType] = useState("Cubic Line Chart");

  const stats = {
    newRFQs: 27,
    quotesReceived: 34,
    completedRFQs: 14,
    closedRFQs: 17,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#1e3a8a",
        bodyColor: "#1e3a8a",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#f1f5f9",
        },
        ticks: {
          color: "#64748b",
        },
      },
      y: {
        grid: {
          color: "#f1f5f9",
        },
        ticks: {
          color: "#64748b",
          stepSize: 1,
        },
        min: 0,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  const data = {
    labels: chartData.days,
    datasets: [
      {
        label: "New RFQs",
        data: chartData.newRFQs,
        borderColor: "#60a5fa",
        backgroundColor: "#60a5fa",
        fill: false,
      },
      {
        label: "Closed RFQs",
        data: chartData.closedRFQs,
        borderColor: "#f472b6",
        backgroundColor: "#f472b6",
        fill: false,
      },
      {
        label: "Completed RFQs",
        data: chartData.completedRFQs,
        borderColor: "#2dd4bf",
        backgroundColor: "#2dd4bf",
        fill: false,
      },
      {
        label: "Quotes Received",
        data: chartData.quotesReceived,
        borderColor: "#fbbf24",
        backgroundColor: "#fbbf24",
        fill: false,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">RFQ Overview</h1>
            <p className="text-blue-600">Jan 13 - Jan 19, 2025</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <select className="bg-white flex flex-col md:flex-row px-4 py-2 rounded-lg border border-blue-200 text-blue-900">
              <option>Choose Project</option>
              <option>Project Alpha</option>
              <option>Project Beta</option>
            </select>
            <select
              className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-blue-900"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option>Cubic Line Chart</option>
              <option>Bar Chart</option>
            </select>
            <select className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-blue-900">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "New RFQs",
              value: stats.newRFQs,
              icon: ShoppingCart,
              color: "blue",
            },
            {
              label: "Quotes Received",
              value: stats.quotesReceived,
              icon: LineChart,
              color: "yellow",
            },
            {
              label: "Completed RFQs",
              value: stats.completedRFQs,
              icon: CheckSquare,
              color: "teal",
            },
            {
              label: "Closed RFQs",
              value: stats.closedRFQs,
              icon: XSquare,
              color: "pink",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl font-bold text-blue-900">
                  {stat.value}
                </span>
                <stat.icon className={`text-${stat.color}-500 w-6 h-6`} />
              </div>
              <h3 className="text-blue-600 font-medium">{stat.label}</h3>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-900 mb-6">
            Chart Report from Jan 13 - Jan 19, 2025
          </h2>
          <div className="h-[400px] relative">
            {chartType === "Cubic Line Chart" ? (
              <Line options={chartOptions} data={data} />
            ) : (
              <Bar options={chartOptions} data={data} />
            )}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            {[
              { label: "New RFQs", color: "bg-blue-400" },
              { label: "Closed RFQs", color: "bg-pink-400" },
              { label: "Completed RFQs", color: "bg-teal-400" },
              { label: "Quotes Received", color: "bg-yellow-400" },
            ].map((legend, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${legend.color}`}></div>
                <span className="text-sm text-blue-900">{legend.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Link
          to={"/rfq-creation"}
          className="mt-14 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Create New RFQ
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
