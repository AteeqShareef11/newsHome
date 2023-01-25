import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Section from '../../Shared/Section'
import SectionHeader from '../../Shared/SectionHeader'
import Slider1 from "../../assets/slider1.jpg"
import Latest2 from "../../assets/image2.jpg"
import Latest3 from "../../assets/image3.jpg"
import Latest4 from "../../assets/image4.jpg"
import NewsCard from './../../Shared/NewsCard/index';

const cardData = {
    image: Slider1,
    title: "The Best Way To Why Food Is Important For Us",
    writer: "Amelia"

}
const latestData = [

    {
        id: 1,
        image: Latest2,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },
    {
        id: 2,
        image: Latest3,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },
    {
        id: 3,
        image: Latest4,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },

]

const AllInOne = () => {
    return (
        <Section>
            <SectionHeader title="All in One" />
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <NewsCard item={cardData} />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display="flex" flexDirection="column">
                        {
                            latestData.map((item) => (
                                <Box sx={{
                                    border: 1,
                                    borderColor: "borderColors.gray"
                                }} display="flex" alignItems="center" justifyContent="center" p="1px" >
                                    <img width="90px" height="50px" src={item.image} alt='' />
                                    <Box sx={{ backgroundColor: "white" }} display="flex" flexDirection="column" p={1} gap={1} >
                                        <Typography fontSize="9px" sx={{
                                            "&:hover": {
                                                color: "textColors.secondary"
                                            },
                                        }} color="textColors.primary" >{item.title}</Typography>
                                        <Typography fontSize="9px" >by {item.writer}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display="flex" flexDirection="column">
                        {
                            latestData.map((item) => (
                                <Box sx={{
                                    border: 1,
                                    borderColor: "borderColors.gray"
                                }} display="flex" alignItems="center" justifyContent="center" p="1px" >
                                    <img width="90px" height="50px" src={item.image} alt='' />
                                    <Box sx={{ backgroundColor: "white" }} display="flex" flexDirection="column" p={1} gap={1} >
                                        <Typography fontSize="9px" sx={{
                                            "&:hover": {
                                                color: "textColors.secondary"
                                            },
                                        }} color="textColors.primary" >{item.title}</Typography>
                                        <Typography fontSize="9px" >by {item.writer}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Box display="flex" flexDirection="column">
                        {
                            latestData.map((item) => (
                                <Box sx={{
                                    border: 1,
                                    borderColor: "borderColors.gray"
                                }} display="flex" alignItems="center" justifyContent="center" p="1px" >
                                    <img width="90px" height="50px" src={item.image} alt='' />
                                    <Box sx={{ backgroundColor: "white" }} display="flex" flexDirection="column" p={1} gap={1} >
                                        <Typography fontSize="9px" sx={{
                                            "&:hover": {
                                                color: "textColors.secondary"
                                            },
                                        }} color="textColors.primary" >{item.title}</Typography>
                                        <Typography fontSize="9px" >by {item.writer}</Typography>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>

            </Grid>
        </Section>
    )
}

export default AllInOne