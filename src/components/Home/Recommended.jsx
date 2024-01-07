
import useItems from "../../hooks/useItems";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Recommended = () => {
    const [items] = useItems();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="max-w-5xl mx-3 lg:mx-auto mt-20 mb-32 space-y-3">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold"> Recommended </h2>
                <div className="flex justify-center items-center gap-1">
                    <Button style={{ fontWeight: 800, color: 'orange' }} onClick={handleOpen}>Add More</Button>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box className="w-72 lg:w-96" sx={style}>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                {/* Name */}
                                <div className="mb-6 border-b-2 w-full">
                                    <input
                                        type="text"
                                        name="text"
                                        {...register("name", { required: true })}
                                        placeholder="Name" className="input w-full p-1"
                                    />
                                </div>

                                {/* ImageUrl */}
                                <div className="mb-6 w-full border-b-2">
                                    <input
                                        type="photo"
                                        name="image"
                                        {...register("image", { required: true })}
                                        placeholder="ImageUrl" className="input w-full p-1"
                                    />
                                </div>
                                <div className="form-control mt-6 w-1/2 mx-auto">
                                    <button className="bg-orange-300 hover:bg-orange-400 w-full p-2 rounded-full">Add</button>
                                </div>
                            </form>
                        </Box>
                    </Modal>
                    <div className="flex">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {items?.Items?.map(item =>
                    <div key={item?.Id} className="flex">
                        <img className="h-48 w-32 md:w-44 lg:w-48 rounded-lg" src={item?.ImageUrl} alt="" />
                        <h1 className="text-lg text-center font-semibold">{item?.Name}</h1>
                    </div>
                )}
            </Slider>
        </div>
    );
};

export default Recommended;

