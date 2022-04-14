import React from 'react'
import { TextField } from '@mui/material';
import { bgcolor, color } from '@mui/system';
export default function Input(props) {
    const { name, label, value=null,error=null, onChange } = props

    return (
        <TextField 
        // sx={{ input: { color: 'white' } }}
            // id="outlined-basic"
            variant='filled'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            
            {...(error && {error:true, helperText:error})}
            style={{background: "#FFF"}}

        />
    )
}
