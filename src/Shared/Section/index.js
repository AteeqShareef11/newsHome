import { Box } from '@mui/material'
import React from 'react'

const Section = ({ children }) => {
    return (
        <Box width="90%" mx="auto" display="flex" flexDirection="column" gap={2}>
            {children}
        </Box>
    )
}

export default Section