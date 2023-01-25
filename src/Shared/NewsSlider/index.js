import { Box, Typography } from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import Slider1 from "../../assets/slider1.jpg"
import Slider2 from "../../assets/slider2.jpg"
import Slider3 from "../../assets/slider3.jpg"
import Slider4 from "../../assets/slider4.jpg"
import Slider5 from "../../assets/slider5.jpg"
import Slider6 from "../../assets/slider6.jpeg"

const sliderData = [
    {
        id: 0,
        image: Slider1,
        title: "The Best Way To Why Food Is Important For Us",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    },
    {
        id: 1,
        image: Slider2,
        title: "Best Health Insurance In Pakistan Tips You Will Read This Year",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    },
    {
        id: 2,
        image: Slider3,
        title: "Introducing The Simple Way To Sports Games For Kids",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    },
    {
        id: 3,
        image: Slider4,
        title: "It’s Time To Expand Your Importance Of Education In Pakistan Options",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    },
    {
        id: 4,
        image: Slider5,
        title: "How To Learn What Is Online Marketing",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    },
    {
        id: 5,
        image: Slider6,
        title: "Smart Devices For Tv Is Essential For Your Success. Read This To...",
        catgroey: "SCI-TECH",
        writer: "by Amela",
        date: "23 December 2022"
    }
]
const NewsSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                sliderData.map((item) => (
                    <Box position="relative" key={item.id}>
                        <img width="100%" src={item.image} alt="" />
                        <Box sx={{
                            backgroundColor: " rgb(0, 0, 0,0.7)"
                        }} width="80%" p={2} bottom={10} mx="auto" left={0} right={0} zIndex={10} gap={1} position="absolute" display="flex" flexDirection="column">
                            <Box gap={2} color="white" justifyContent="center" alignItems="center" display="flex" >
                                <Typography fontSize="10px" >Latest</Typography>
                                <Typography fontSize="10px" >{item.catgroey}</Typography>
                            </Box>
                            <Typography sx={{
                                textAlign: "center",
                                color: "#ffff",
                                fontWeight: "bold"
                            }}>{item.title}</Typography>
                            <Box gap={2} color="white" justifyContent="center" alignItems="center" display="flex" >
                                <Typography fontSize="10px">{item.writer}</Typography>
                                <Typography fontSize="10px">{item.date}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))
            }

        </Slider>
    )
}

export default NewsSlider