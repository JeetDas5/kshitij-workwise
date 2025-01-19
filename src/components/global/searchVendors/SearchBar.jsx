import { Input } from "../../ui/input";
import { Select,SelectTrigger,SelectValue,SelectItem,SelectContent } from "../../ui/select";
export default function SearchBar(){
    return (
        <div className="searchbar m-auto w-3/6 flex flex-col justify-center items-center">
            <Input type="text" placeholder="abc" className="rounded-3xl border-2 border-black text-center" />
            <div className="flex flex-row m-2 w-full justify-between">
                <Select>
                    <SelectTrigger className="w-4/12 rounded-3xl border-2 border-black pleatext-center">
                        <SelectValue placeholder="Vendor Approved By"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-7/12 rounded-3xl border-2 border-black">
                        <SelectValue placeholder="Product Category Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}