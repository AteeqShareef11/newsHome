import { Box, Typography } from '@mui/material'
import React from 'react'
import { sectionHeaderStyle } from './style'

const SectionHeader = ({ title }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box ml={1} px={3} py={1} sx={sectionHeaderStyle.headerTitle}>
                <Typography fontSize="12px" color="#ffffff">{title}</Typography>
            </Box>

        </Box>
    )
}

export default SectionHeader