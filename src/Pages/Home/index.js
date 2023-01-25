import { Box } from '@mui/material'
import React from 'react'
import AllInOne from '../../components/AllInOne'
import Business from '../../components/Buisness'
import Education from '../../components/Education'
import Entertainment from '../../components/Entertainment'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Health from '../../components/Health'
import Hero from '../../components/Hero'
import Latest from '../../components/Latest'
import Life from '../../components/Life'
import Sports from '../../components/Sports'
import Technology from '../../components/Technology'

const Home = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <Header />
            <Hero />
            <Latest />
            <AllInOne/>
            <Business />
            <Technology />
            <Entertainment />
            <Education />
            <Health />
            <Life />
            <Sports />
            <Footer/>
        </Box>
    )
}

export default Home