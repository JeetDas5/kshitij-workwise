import {Users, Zap, Shield, ArrowRight } from "lucide-react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Streamline Your RFQ Process
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your Request for Quote management with our intelligent
            platform. Save time, reduce errors, and make better decisions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Try It Free <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 h-8 bottom-0"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard Preview"
              className="rounded-t-xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Everything You Need to Manage RFQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Process RFQs quickly with our intuitive interface and automated workflows.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Your data is protected with enterprise-grade security and regular backups.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Work together seamlessly with role-based access and real-time updates.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10x", label: "Faster Processing" },
              { number: "45%", label: "Cost Reduction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Transform Your RFQ Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust LetsWorkWise for their RFQ
            management.
          </p>
          <Link
            to={"/dashboard"}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>      
      <Footer/>
    </div>
  );
}

export default Home;
