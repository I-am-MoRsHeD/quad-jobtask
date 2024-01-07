
import { IoPersonOutline } from "react-icons/io5";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="max-w-5xl mx-auto px-3 flex justify-between pt-2">
            <div>
                <h1 className="text-2xl font-bold">pti.</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="absolute mr-80 lg:mr-[500px]">
                    <CiSearch className="text-orange-600" />
                </div>
                <div className="flex gap-2">
                    <input type="text" className="pl-8 w-56 lg:w-96 rounded-2xl border-2" placeholder="Search Audiobook" />
                    <Box className="w-28 lg:w-44">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={"Home"}>Home</MenuItem>
                                <MenuItem value={"Details"}>Details</MenuItem>
                                <MenuItem value={"Category"}>Category</MenuItem>
                                <MenuItem value={"My favourite"}>My favourite</MenuItem>
                                <MenuItem value={"Profile"}>Profile</MenuItem>
                                <MenuItem value={"Log In/Sign Up"}>Log In/Sign Up</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className="hidden md:block lg:block">
                <IoPersonOutline className="text-4xl rounded-full bg-[#f99f1c] p-1" />
            </div>
        </div>
    );
};

export default Navbar;