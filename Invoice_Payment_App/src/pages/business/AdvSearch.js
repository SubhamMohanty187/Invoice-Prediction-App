import React from 'react'
import { UseForm, Form } from '../../components/UseForm';
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import Input from '../../components/controls/Input'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { AdvSearchData } from '../../services/CRUD';
import TransitionAlerts from '../../components/Alert';

const initialValues = {
    cust_number: '',
    bus_year: '',
    doc_id: '',
    inv_id: '',
}

export default function AdvSearch({ openadv, setOpenadv, setData }) {

    const [invid, setInvid] = React.useState("");
    const [docid, setDocid] = React.useState("");
    const [by, setBy] = React.useState("");
    const [cn, setCn] = React.useState("");
    const [openA, setOpenA] = React.useState(false);

    const validate = () => {
        let temp = {}
        temp.cust_number = values.cust_number ? "" : "This field is Required."
        temp.bus_year = values.bus_year ? "" : "This field is Required."
        temp.doc_id = values.doc_id ? "" : "This field is Required."
        temp.inv_id = values.inv_id ? "" : "This field is Required."

        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        cancelForm
    } = UseForm(initialValues);

    const handleSearch = e => {
        e.preventDefault()
        if (validate())
            window.alert("Testing...")
            // handleClickOpen();
    }
    
    const handleClose=() => {
        setOpenadv(false);
    };

    const handleClickOpen = async () => {

        // console.log(invoiceCurrency, custPaymentTerms, rowdetails[0]);
        const res = await AdvSearchData(invid,docid,by,cn);
        const data = await res.data;
        setData([data]);
        setOpenA(true);
        
        setOpenadv(false);
    
      };
    

    // const handleClickOpen= () => {
    //     setOpenadv(true);
    // };


    return (
        <>
            <Dialog
                open={openadv}
                onClose={setOpenadv}
                fullWidth

            >
                <DialogTitle style={{ background: '#283d4a', color: "#FFFFFF" }}>
                    ADVANCE SEARCH
                </DialogTitle>
                <DialogContent style={{ background: '#283d4a' }}>


                <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1, width: "100%" },
                            flexGrow: 1,
                        }}
                        autoComplete="off"
                    >
                        <Grid container rowSpacing={3} columnSpacing={4}>
                            <Grid item xs={6}>
                                <Input
                                    name='doc_id'
                                    label='Document ID'
                                    // value={values.doc_id}
                                    onChange={(event) => { setDocid(event.target.value); }}
                                    error={errors.doc_id}

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    name='inv_id'
                                    label='Invoice ID'
                                    // value={values.inv_id}
                                    onChange={(event) => { setInvid(event.target.value); }}
                                    error={errors.inv_id}

                                />
                            </Grid>
                        {/* </Grid> */}

                        {/* <Grid container sx={{ mt: 3 }}> */}
                            <Grid item xs={6}>
                                <Input
                                    name='cust_number'
                                    label='Customer Number'
                                    // value={values.cust_number}
                                    onChange={(event) => { setCn(event.target.value); }}
                                    error={errors.cust_number}

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    name='bus_year'
                                    label='Business Year'
                                    // value={values.bus_year}
                                    onChange={(event) => { setBy(event.target.value); }}
                                    error={errors.bus_year}
                                />
                            </Grid>
                        </Grid>

                        <Grid container columnSpacing={1} sx={{mt: 3 }}>
                            <Grid item xs={6}>
                                <Button
                                className='button'
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    // onClick={"handleSearch(); handleClickOpen();"}
                                    sx={{ width: "100%", color: "#FFFF", mt:3 }}
                                >
                                    SEARCH
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                className='button'
                                    variant="outlined"
                                    // onClick={cancelForm}
                                    onClick={handleClose}
                                    sx={{ width: "100%", color: "#FFFF", mt:3}}
                                >
                                    CANCEL
                                </Button>
                            </Grid>
                        </Grid>

                    </Box>
                </DialogContent>
                
            </Dialog>
            <TransitionAlerts open={openA} setOpen ={setOpenA} />
        </>
    )
}
