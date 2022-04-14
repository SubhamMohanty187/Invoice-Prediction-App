// import { Grid, TextField } from '@mui/material';
import React from 'react'
import { Dialog, DialogContent,TextField, DialogTitle, Grid } from "@mui/material";
import Date from '../../components/controls/Date'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { AddData } from '../../services/CRUD';
import TransitionAlerts from '../../components/Alert';


// const initialValues = {
//     cust_number: '',
//     business_code: '',
//     doc_id: '',
//     inv_cur: '',
//     baseline_create_date: '2022-01-26',
//     post_date: '2022-01-26',
//     doc_type: '',
//     cpt: '',
//     clear_date: '2022-01-26',
//     doc_create_date: '2022-01-26',
//     bus_year: '',
//     due_date: '2022-01-25',
//     pid: '',
//     inv_id: '',
//     total_open_amount: ''
// }


function BusinessForm({ addForm, closeAddForm }) {

    // const validate = () => {
    //     let temp = {}
    //     temp.cust_number = values.cust_number ? "" : "This field is Required."
    //     temp.business_code = values.business_code ? "" : "This field is Required."
    //     temp.doc_id = values.doc_id ? "" : "This field is Required."
    //     temp.inv_cur = values.inv_cur ? "" : "This field is Required."
    //     temp.doc_type = values.doc_type ? "" : "This field is Required."
    //     temp.cpt = values.cpt ? "" : "This field is Required."
    //     temp.bus_year = values.bus_year ? "" : "This field is Required."
    //     temp.pid = values.pid ? "" : "This field is Required."
    //     temp.inv_id = values.inv_id ? "" : "This field is Required."
    //     temp.total_open_amount = values.total_open_amount ? "" : "This field is Required."

    //     setErrors({
    //         ...temp
    //     })

    //     return Object.values(temp).every(x => x == "")
    // }

    // const {
    //     values,
    //     setValues,
    //     errors,
    //     setErrors,
    //     handleTextFieldChange,
    //     cancelForm
    // } = UseForm(initialValues);

    // const handleAdd = e => {
    //     e.preventDefault()
    //     if (validate()) { window.alert("Testing...") }
    // }
    const [openA, setOpenA] = React.useState(false);

    const [businessCode, setBusinessCode] = React.useState("");
    const [customerNumber, setCustomerNumber] = React.useState("");
    const [clearDate, setClearDate] = React.useState("");
    const [businessYear, setBusinessYear] = React.useState("");
    const [documentID, setDocumentID] = React.useState("");
    const [postingDate, setPostingDate] = React.useState("");
    const [documentCreateDate, setDocumentCreateDate] = React.useState("");
    const [dueDate, setDueDate] = React.useState("");
    const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
    const [documentType, setDocumentType] = React.useState("");
    const [postingID, setPostingID] = React.useState("");
    const [totalOpenAmount, setTotalOpenAmount] = React.useState("");
    const [baselineCreateDate, setBaselineCreateDate] = React.useState("");
    const [customerPaymentTerms, setCustomerPaymentTerms] = React.useState("");
    const [invoiceID, setInvoiceID] = React.useState("");

    const body = JSON.stringify({
        bcode: businessCode,
        cn: customerNumber,
        cdate: clearDate,
        byear: businessYear,
        doc: documentID,
        pdate: postingDate,
        dcd: documentCreateDate,
        ddate: dueDate,
        ic: invoiceCurrency,
        dtype: documentType,
        pid: postingID,
        toa: totalOpenAmount,
        bcd: baselineCreateDate,
        cpt: customerPaymentTerms,
        invid: invoiceID,})

    const handleClickOpen = async () => {
        const res = await AddData(body);
        console.log(res.status);
        setOpenA(true);
        closeAddForm(false);

    }
    const handleclose = () => {
        closeAddForm(false);
    }


    return (
        <>
            <Dialog
                open={addForm}
                onClose={closeAddForm}
                // width='85%'
                fullWidth
                maxWidth="l"
            >
                <DialogTitle style={{ background: '#283d4a', color: "#FFFFFF" }}>
                    ADD
                </DialogTitle>
                <DialogContent style={{ background: '#283d4a' }}>


                    {/* <Form sx={{width: '1100px'}}>
                     */}
                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1, width: "100%" },
                            flexGrow: 1,
                        }}
                        autoComplete="off"
                    >
                        <Grid container sx={{ width: '85%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 3, lg: 4 }}>
                            <Grid item xs={3} >
                                <TextField
                                    name='business_code'
                                    label='Business Code'
                                    variant='filled'
                                    onChange={(event) => { setBusinessCode(event.target.value); }}
                                    // error={errors.business_code}
                                    style={{background: "#FFF"}}

                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    name='cust_number'
                                    label='Customer Number'
                                    variant='filled'
                                    onChange={(event) => { setCustomerNumber(event.target.value); }}
                                    // error={errors.cust_number}
                                    style={{background: "#FFF"}}

                                />

                            </Grid>
                            <Grid item xs={3}>
                                <Date
                                    name='clear_date'
                                    label='Clear Date'
                                    variant='filled'
                                    onChange={(event) => { setClearDate(event.target.value); }}

                                />

                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    name='bus_year'
                                    label='Business Year'
                                    variant='filled'
                                    onChange={(event) => { setBusinessYear(event.target.value); }}
                                    // error={errors.bus_year}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>
                            {/* </Grid> */}

                            {/* <Grid container sx={{ mt: 3, width:'85%' }}> */}
                            <Grid item xs={3}>
                                <TextField
                                    name='doc_id'
                                    label='Document ID'
                                    variant='filled'
                                    onChange={(event) => { setDocumentID(event.target.value); }}
                                    // error={errors.doc_id}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Date
                                    name='post_date'
                                    label='Posting Date'
                                    variant='filled'
                                    onChange={(event) => { setPostingDate(event.target.value); }}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Date
                                    name='doc_create_date'
                                    label='Document Create Date'
                                    variant='filled'
                                    onChange={(event) => { setDocumentCreateDate(event.target.value); }}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Date
                                    name='due_date'
                                    label='Due Date'
                                    variant='filled'
                                    onChange={(event) => { setDueDate(event.target.value); }}
                                />
                            </Grid>
                            {/* </Grid> */}

                            {/* <Grid container sx={{ mt: 3, width:'85%' }}> */}

                            <Grid item xs={3}>
                                <TextField
                                    name='inv_cur'
                                    label='Invoice Currency'
                                    variant='filled'
                                    onChange={(event) => { setInvoiceCurrency(event.target.value); }}
                                    // error={errors.inv_cur}
                                    style={{background: "#FFF"}}

                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    name='doc_type'
                                    label='Document Type'
                                    variant='filled'
                                    onChange={(event) => { setDocumentType(event.target.value); }}
                                    // error={errors.doc_type}
                                    style={{background: "#FFF"}}
                                />

                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    name='pid'
                                    label='Posting ID'
                                    variant='filled'
                                    onChange={(event) => { setPostingID(event.target.value); }}
                                    // error={errors.pid}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    name='total_open_amount'
                                    label='Total Open Amount'
                                    variant='filled'
                                    onChange={(event) => { setTotalOpenAmount(event.target.value); }}
                                    // error={errors.total_open_amount}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>
                            {/* </Grid> */}

                            {/* <Grid container sx={{ mt: 3,width:'85%' }}> */}

                            <Grid item xs={3}>
                                <Date
                                    name='baseline_create_date'
                                    label='Baseline Create Date'
                                    variant='filled'
                                    onChange={(event) => { setBaselineCreateDate(event.target.value); }}
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    name='cpt'
                                    label='Customer Payment Terms'
                                    variant='filled'
                                    onChange={(event) => { setCustomerPaymentTerms(event.target.value); }}
                                    // error={errors.cpt}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    name='inv_id'
                                    label='Invoice ID'
                                    variant='filled'
                                    onChange={(event) => { setInvoiceID(event.target.value); }}
                                    // error={errors.inv_id}
                                    style={{background: "#FFF"}}
                                />
                            </Grid>

                        </Grid>

                        <Grid container columnSpacing={1} sx={{ width: '85%' }}>
                            <Grid item xs={6}>
                                <Button
                                    className='button'
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    sx={{ width: "100%", color: "#FFFF", mt: 4 }}
                                >
                                    ADD
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="outlined"
                                    className='button'
                                    // onClick={cancelForm}
                                    onClick={handleclose}
                                    sx={{ width: "100%", color: "#FFFF", mt: 4 }}
                                >
                                    CANCEL
                                </Button>
                            </Grid>
                        </Grid>

                        {/* {/* </Form> */}
                    </Box>
                </DialogContent>
            </Dialog>

            <TransitionAlerts open={openA} setOpen ={setOpenA} />
        </>
    )
}
export default BusinessForm