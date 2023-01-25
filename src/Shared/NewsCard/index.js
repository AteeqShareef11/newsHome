import { Box, Typography } from '@mui/material'
import React from 'react'
import { newsCardStyle } from './style'

const NewsCard = ({ item }) => {
    return (
        <Box sx={newsCardStyle.cardWrapper} display="flex" flexDirection="column" >
            <img src={item.image} alt='' />
            <Box sx={newsCardStyle.cardBg} display="flex" flexDirection="column" p={1} gap={1} >
                <Typography fontSize="12px" sx={newsCardStyle.cardTitle} color="textColors.primary" >{item.title}</Typography>
                <Typography fontSize="10px" >by {item.writer}</Typography>
            </Box>
        </Box>
    )
}

export default NewsCard