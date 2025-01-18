import { Input } from "../components/ui/input";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function RfqManagement() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <div className="h-[40vh] m-4 mx-auto p-2 bg-[#263844] text-white  font-poppins flex flex-col items-center">
          <h1 className="mt-10 text-2xl font-semibold ">RFQ Management</h1>
        </div>

        <div className="h-[60vh] m-4 p-2 bg-white">
          <div className="w-[90vw] mx-auto bg-white self-center absolute top-40 text-center p-4 mt-10 rounded-xl">
            <div className="mx-auto mb-4">
              <h1 className="text-lg font-bold">Manage Group RFQ</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-14">
              <div className="flex flex-col items-start">
                <p className="text-sm font-normal ">Search RFQ</p>
                <Input
                  type="text"
                  placeholder="EX. 12345"
                  className="input-custom"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-start">
                  <p className="text-sm font-normal">RFQ Type</p>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Budgetory">Budgetory</SelectItem>
                      <SelectItem value="Firm">Firm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-normal">Reverse Auction</p>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Enabled">Enabled</SelectItem>
                      <SelectItem value="Disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-normal">Search RFQ</p>
                  <Input
                    type="text"
                    placeholder="Search Project"
                    className="input-custom"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-normal">Sort By</p>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">Latest to Updated</SelectItem>
                      <SelectItem value="Oldest">Oldest to Latest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
