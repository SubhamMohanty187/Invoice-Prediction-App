import React, { useEffect, useState } from 'react'
import { Data } from '../services/CRUD';
// import { TableContainer, TableHead, TableBody, Table, TableRow, TableCell, Paper } from '@mui/material';

export default function Grid() {

  const [data, setData] = useState([]);

  useEffect(async () => {

    setData(await Data())

  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Business Code</th>
            <th>Business Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(business => (
            <tr key={business.businessCode}>
              <td>{business.businessCode}</td>
              <td>{business.businessName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}