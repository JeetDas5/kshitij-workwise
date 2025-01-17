import Footer from "../components/global/Footer";
import Header from "../components/global/Header";

export default function RfqManagement() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <div className="h-[40vh] m-4 mx-auto p-2 bg-[#263844] text-white  font-poppins flex flex-col items-center">
          <h1 className="mt-10 text-2xl font-semibold ">RFQ Management</h1>
          <div className="w-[90vw] text-center p-4 mt-4">
            <div className="">
              <p className="bg-white text-black w-fit m-2 p-2 rounded-lg">Manage Group RFQ</p>
            </div>
            <div>Lower</div>
          </div>
        </div>

        <div className="h-[60vh] m-4 p-2 bg-white"></div>
      </div>
      <Footer />
    </div>
  );
}
