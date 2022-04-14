import React from 'react'
import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'

export default function Loading() {
  return (
    <Box sx={{width:'75%', m:20}}>
    <LinearProgress />
    </Box>
  )
}
