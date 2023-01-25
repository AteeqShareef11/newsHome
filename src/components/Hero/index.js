import React from 'react'
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box"
import NewsSlider from '../../Shared/NewsSlider';
import NewsHero from './NewsHero/index';
const Hero = () => {
    return (
        <Box  width="90%" mx="auto" display="flex">
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <NewsSlider />
                </Grid>
                <Grid item md={6} xs={12}>
                    <NewsHero />
                </Grid>

            </Grid>
        </Box>
    )
}

export default Hero