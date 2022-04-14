import React from 'react'
import { Box, AppBar, Toolbar, Typography} from '@mui/material'

export default function Header() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: "#2E3B55", minHeight:30 }}>
                    <Toolbar variant="dense">

                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                            <img src="abclogo.png" className="App-logo" alt="" align="left" />
                        </Typography>   

                        <Typography variant="h3" component="div" sx={{ flexGrow: 1, pr: 20 }}>
                            <img src= "\highradiuslogo.png" className="App-logo" alt="" />
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
