import React from 'react'
import { Dialog, DialogContent, DialogTitle, Grid} from "@mui/material";
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { DeleteData } from '../../services/CRUD';
import TransitionAlerts from '../../components/Alert';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Delete({ opendel, setOpenDel, rowdetails }) {
    const [openA, setOpenA] = React.useState(false);

    const handleClose = () => {
        setOpenA(true);
        setOpenDel(false);
    };

    const handleClickOpen = async () => {
        // console.log(invoiceCurrency, custPaymentTerms, rowdetails[0]);
        // console.log(rowdetails[0]);
        const res = await DeleteData(rowdetails[0]);
        if (res.status === 200){
            setOpenA(true);
        setOpenDel(false);
        }
    };

    return (
        <>
            <Dialog
                open={opendel}
                onClose={setOpenDel}
                fullWidth
                TransitionComponent={Transition}

            >
                <DialogTitle style={{ background: '#283d4a', color: "#FFFFFF" }}>
                    Delete Records ?
                </DialogTitle>
                <DialogContent style={{ background: '#283d4a' }}>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description" style={{ color: "#FFF" }}>
                                Are you sure you want to delete these record[s] ?
                            </DialogContentText>
                        </DialogContent>

                        <Grid container columnSpacing={1} sx={{ mt: 3 }}>
                            <Grid item xs={6}>
                                <Button
                                    className='button'
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    // onClick={handleSearch}
                                    sx={{ width: "100%", color: "#FFFF", mt: 1 }}
                                >
                                    DELETE
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    className='button'
                                    variant="outlined"
                                    // onClick={cancelForm}
                                    onClick={handleClose}
                                    sx={{ width: "100%", color: "#FFFF",mt: 1, backgroundColor: "#283d4a" }}
                                >
                                    CANCEL
                                </Button>
                            </Grid>
                        </Grid>

                </DialogContent>

            </Dialog>

            <TransitionAlerts open={openA} setOpen ={setOpenA} />
        </>
    )
}

export default Delete