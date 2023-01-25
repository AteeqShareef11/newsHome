import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Slider1 from "../../../assets/slider1.jpg"
import Slider2 from "../../../assets/slider2.jpg"
import Slider3 from "../../../assets/slider3.jpg"
import Slider4 from "../../../assets/slider4.jpg"
import Slider5 from "../../../assets/slider5.jpg"
import Slider6 from "../../../assets/slider6.jpeg"
import { newsHeroStyle } from './style';

const newsHeroData = [
    {
        id: 0,
        image: Slider1,
        title: "The Best Way To Why Food Is Important For Us",
    },
    {
        id: 1,
        image: Slider2,
        title: "Best Health Insurance In Pakistan Tips You Will Read This Year",

    },
    {
        id: 2,
        image: Slider3,
        title: "Introducing The Simple Way To Sports Games For Kids",

    },
    {
        id: 3,
        image: Slider4,
        title: "It’s Time To Expand Your Importance Of Education In Pakistan Options",

    },
    {
        id: 4,
        image: Slider5,
        title: "How To Learn What Is Online Marketing",

    },
    {
        id: 5,
        image: Slider6,
        title: "Smart Devices For Tv Is Essential For Your Success. Read This To...",

    }
]

const NewsHero = () => {
    return (
        <Box sx={newsHeroStyle.newsHeroWrapper} p={2} display="flex" flexDirection="column" gap={1}>
            <Typography color="textColors.primary" fontWeight="bold" fontSize="12px">TREDING NOW</Typography>
            <Box width="full" height="2px" display="flex"><Box width="10%" sx={newsHeroStyle.borderLeft}></Box> <Box width="90%" sx={newsHeroStyle.borderRight} ></Box></Box>
            <Grid container spacing={2}>
                {
                    newsHeroData.map((item) => (
                        <Grid item md={6} xs={12} key={item.id}>
                            <Box alignItems="center" display="flex" gap={2}>
                                <img width="100px" height="50px" src={item.image} alt="" />
                                <Typography sx={newsHeroStyle.newsHeroPara} color="textColors.paragraph" fontWeight="bold" fontSize="9px" >{item.title}</Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default NewsHero