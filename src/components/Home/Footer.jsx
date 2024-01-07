import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-[#f99f1c] h-full w-full">
            <div className="max-w-5xl mx-auto flex lg:flex-row lg:gap-56">
                <div className="pt-10 pb-20 flex-1">
                    <input className="w-full h-11 px-5 rounded-2xl" type="text" value="" placeholder="Enter Your Email" />
                    <div className="absolute ml-60 md:ml-[580px] lg:ml-80 -mt-10">
                        <button className=" bg-orange-500 rounded-2xl py-1 px-10 text-white font-semibold">Subscribe <IoIosArrowRoundForward className="inline text-3xl" /> </button>
                    </div>
                    <div className="mt-20 ">
                        <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center items-center lg:justify-between">
                            <div className="space-y-3">
                                <h1 className="text-3xl font-bold text-center lg:text-left">pti<span className="text-red-600">.</span></h1>
                                <p className="font-semibold text-base">Copyright&copy;Tripp.All Right Reserved</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-3xl">
                                <AiOutlineGoogle className="bg-gray-100 rounded-full p-1 text-orange-500" />
                                <AiOutlineTwitter className="bg-gray-100 rounded-full p-1 text-orange-500" />
                                <AiOutlineInstagram className="bg-gray-100 rounded-full p-1 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img className="lg:w-72" src="https://i.ibb.co/QpWy9g4/Image2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;