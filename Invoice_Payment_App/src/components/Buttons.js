import React from 'react';
import { Toolbar, Box, Button, ButtonGroup, TextField } from '@mui/material';
import BusinessForm from '../pages/business/BusinessForm';
import AdvSearch from '../pages/business/AdvSearch';
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import {Data, searchData} from '../services/CRUD'
import Edit from '../pages/business/Edit';
import Delete from '../pages/business/Delete';

export default function Buttons({data, setData, selectedRowDetails, length}) {

    const [addForm, setAddForm] = useState(false);
    const [openadv, setOpenadv] = useState(false);
    const [open, setOpen] = useState(false);
    const [opendel, setOpenDel] = useState(false);


    const handleDel = () => {
        setOpenDel(true);
    }

    const openAddForm = () => {
        setAddForm(true);
        
    };
    
    const handleAdvSearch= () =>{
        setOpenadv(true);

    };

    const handleEdit = () => {
        setOpen(true);

    };

    const func = async () => {
        setData(await Data())
      };

    const flag = length === 1;
    const delflag = length >= 1;

    const simplesearch = async(cn) =>{
     const res = await searchData(cn);
     const data = await res.data;
     console.log(data);
     setData(data);
    }

    return (
        <>
            <Toolbar>

                <Box
                    sx={{
                        mr: 2
                    }}
                >

                    <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >
                        <Button className="button" sx={{ color: '#FFFFFF', width: '30mm' }} >PREDICT</Button>
                        <Button className="button" sx={{ color: '#FFFFFF', width: '45mm' }} >ANALYTIC VIEW</Button>
                        <Button className="button" sx={{ color: '#FFFFFF', width: '50mm' }} onClick={handleAdvSearch}>ADVANCE SEARCH</Button>
                        <Button className='button'><RefreshIcon sx={{ color: '#FFF', width: '8mm' }} onClick={func}/></Button>

                    </ButtonGroup>

                </Box>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                ></Box>
                <TextField id="outlined-search" label="Search Customer ID" variant='filled' type="search"  onKeyPress={(event)=>
      {if (event.key==="Enter")
      {
        console.log(event.target.value);
        simplesearch(event.target.value);
      }}}/>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'right',
                        '& > *': {
                            m: 2,
                        },
                    }}
                >

                    <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >
                        <Button className="button" sx={{ color: '#FFFFFF', width: '35mm' }} onClick={openAddForm}>ADD</Button>
                        <Button className="button" sx={{ color: '#FFFFFF', width: '30mm' }} disabled ={!flag} onClick={handleEdit}>EDIT</Button>

                        
                        <Button className="button" sx={{ color: '#FFFFFF', width: '35mm' }} disabled ={!delflag} onClick={handleDel}>DELETE</Button>
                    </ButtonGroup>
                </Box>

            </Toolbar>

            <BusinessForm 
            addForm={addForm} 
            closeAddForm={setAddForm} 
            />

            <AdvSearch 
            openadv={openadv}
            setOpenadv={setOpenadv}
            setData={setData}
            />

            <Edit
            open={open}
            setOpen={setOpen}
            rowdetails={selectedRowDetails}
            />

            <Delete
            opendel={opendel}
            setOpenDel={setOpenDel}
            rowdetails={selectedRowDetails}
            />

        </>
    );
}

// import * as React from 'react'
// import { Toolbar } from '@mui/material';
// import { Button } from '@mui/material';
// import { ButtonGroup } from '@mui/material';
// import { TextField } from '@mui/material';
// import ReplayIcon from '@mui/icons-material/Replay';
// import EditDialog from './EditDialog';
// import DeleteDialog from './DeleteDialog';
// import AddDialog from './AddDialog';
// import AdvDialog from './AdvDialog';


// export default function Buttons({ length, selectedRowDetails }) {
//     const [editDialogOpen, setEditDialogOpen] = React.useState(false);
//     const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
//     const [addDialogOpen, setAddDialogOpen] = React.useState(false);
//     const [advSerDialogOpen, setAdvSerDialogOpen] = React.useState(false);

//     // React.useEffect(()=>{
//     //   console.log(`edit:${props.length}`);
//     // },[props.length])

//     const showEditOption = length === 1;//!isLoading &&
//     const showDeleteOption = length >= 1;

//     // function customerSearch() {
//     //     console.log("Customer ID is searched");

//     // }


//     // document.getElementById('custSearch')
//     //     .addEventListener('keyup', function (event) {
//     //         if (event.code === 'Enter') {
//     //             event.preventDefault();
//     //             document.querySelector('TextField').customerSearch();
//     //         }
//     //     });

//     // onKeyPress={(event) => customerSearch()}

//     function refreshPage() {
//         window.location.reload();
//     }

//     return (
//         <>
//             <Toolbar className='tlbr'>
//                 <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >

//                     <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} >PREDICT</Button>
//                     <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} >ANALYTIC VIEW</Button>
//                     <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} onClick={() => setAdvSerDialogOpen(true)}>ADVANCE SEARCH</Button>
//                     <Button><ReplayIcon sx={{ color: '#FFF' }} onClick={() => refreshPage()} /></Button>

//                 </ButtonGroup>

//                 <TextField className="searchBtn" id="custSearch" label="Search Customer ID" type="search" variant="filled" />

//                 <ButtonGroup className="btngrp" size="large" variant="outlined" aria-label="outlined button group"  >

//                     <Button className="button" sx={{ color: '#FFFFFF', width: '60mm' }} onClick={() => setAddDialogOpen(true)}>ADD</Button>
//                     <Button className="button" sx={{
//                         color: '#FFFFFF', width: '60mm',
//                         ":disabled": {
//                             color: '#a7a0a0', borderLeftColor: '#205183'
//                         },
//                     }} disabled={!showEditOption} onClick={() => setEditDialogOpen(true)}>EDIT</Button>
//                     <Button className="button" sx={{
//                         color: '#FFFFFF', width: '60mm', ":disabled": {
//                             color: '#a7a0a0', borderColor: '#205183',
//                         },
//                     }} disabled={!showDeleteOption} onClick={() => setDeleteDialogOpen(true)}>DELETE</Button>
//                 </ButtonGroup>
//             </Toolbar>
//             <EditDialog
//                 open={editDialogOpen}
//                 setOpen={setEditDialogOpen}
//                 selectedRowDetails={selectedRowDetails}
//             />
//             <DeleteDialog
//                 open={deleteDialogOpen}
//                 setOpen={setDeleteDialogOpen}
//                 selectedRowDetails={selectedRowDetails}
//             />
//             <AddDialog
//                 open={addDialogOpen}
//                 setOpen={setAddDialogOpen}
//             />
//             <AdvDialog
//                 open={advSerDialogOpen}
//                 setOpen={setAdvSerDialogOpen}
//             />
//         </>
//     )
// }