import React from 'react'
import { TextField } from '@mui/material';

export default function Date(props) {
  const { name,label, value, onChange } = props
    return (
        <TextField
            variant='filled'
            type='date'
            id="date"
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            sx={{width:'25.5ch'}}
            // style={{background: "#FFFFF"}}
            style={{background: "#FFF"}}

        />
    )
}
