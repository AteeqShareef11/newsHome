import { Box, Grid } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard'

const ItemListing = ({ data }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                {
                    data.map((item) => (
                        <Grid item md={3} xs={12} key={item.id}>
                            <NewsCard item={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ItemListing