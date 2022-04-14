import { Box, Paper } from '@mui/material'
import React from 'react'
import BusinessForm from './BusinessForm'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import AdvSearch from './AdvSearch';


export default function Business() {
    
    return (
        <>

            <BusinessForm />
            <AdvSearch />

        </>

    )
}
