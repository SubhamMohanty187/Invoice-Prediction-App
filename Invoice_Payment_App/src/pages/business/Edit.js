import React from 'react'
// import { UseForm, Form } from '../../components/UseForm';
import { Dialog, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { EditData } from '../../services/CRUD';
import TransitionAlerts from '../../components/Alert';


function Edit({ open, setOpen, rowdetails }) {

  const [invoiceCurrency, setInvoiceCurrency] = React.useState("");
  const [custPaymentTerms, setCustPaymentTerms] = React.useState("");
  const [openA, setOpenA] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = async () => {

    // console.log(invoiceCurrency, custPaymentTerms, rowdetails[0]);
    const res = await EditData(invoiceCurrency, custPaymentTerms, rowdetails[0]);
    if (res.status === 200){
      setOpenA(true);
      setOpen(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={setOpen}
        fullWidth

      >
        <DialogTitle style={{ background: '#283d4a', color: "#FFFFFF" }}>
          EDIT
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

              {/* <Grid item xs={6}>
                <TextField
                  name='cust_num'
                  label='Customer Number'
                  variant="filled"
                  // value={values.cust_num}
                onChange={(event) => { setCustNum(event.target.value); }}
                // onChange={handleInputChange}
                style={{ width: 200, background: "#FFFFFF", borderRadius: "5px" }}
                />
              </Grid> */}


              <Grid item xs={6}>
                <TextField
                  name='inv_cur'
                  label='Invoice Currency'
                  variant="filled"
                  defaultValue={rowdetails[1]}
                  // value={values.inv_cur}
                  onChange={(event) => { setInvoiceCurrency(event.target.value); }}
                  style={{ width: 200, background: "#FFFFFF", borderRadius: "5px" }}

                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='cpt'
                  label='Customer Payment Terms'
                  variant="filled"
                  defaultValue={rowdetails[2]}
                  // value={values.cpt}
                  onChange={(event) => { setCustPaymentTerms(event.target.value); }}
                  style={{ width: 200, background: "#FFFFFF", borderRadius: "5px" }}

                />
              </Grid>
            </Grid>

            <Grid container columnSpacing={1} sx={{ mt: 3 }}>
              <Grid item xs={6}>
                <Button
                  className='button'
                  variant="outlined"
                  onClick={handleClickOpen}

                  sx={{ width: "100%", color: "#FFFF", mt: 3 }}
                >
                  EDIT
                </Button>

              </Grid>
              <Grid item xs={6}>
                <Button
                  className='button'
                  variant="outlined"
                  // onClick={cancelForm}
                  onClick={handleClose}
                  sx={{ width: "100%", color: "#FFFF", mt: 3 }}
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

export default Edit