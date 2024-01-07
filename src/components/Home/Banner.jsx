

const Banner = () => {
    return (
        <div className="max-w-5xl mx-auto rounded-3xl mt-36 bg-[#f99f1c]">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-10">
                <div className="text-white ml-10 w-full text-center lg:w-5/12 space-y-4">
                    <h1 className="text-4xl font-semibold ">Deliver Food To Your Door Step</h1>
                    <p className="text-orange-200 text-xl">Authentic Food,Quick Service,Fast Delivery</p>
                </div>
                <div className="w-1/2">
                    <img className="h-72" src="https://i.ibb.co/55zmWqr/Image1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;