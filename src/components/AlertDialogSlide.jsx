import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { GreenButton, RedButton } from "../utils/buttonStyles";

const AlertDialogSlide = ({ dialog, showDialog, setShowDialog }) => {
    const handleClose = () => {
        setShowDialog(false);
    };
    // const taskHandler = () => { // or we can create a task handler function
    //     showDialog(false);
    // };
        
    return (
        <Dialog
            open={showDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{dialog}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    You won't be able to recover it back.
                    Decide Now
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <GreenButton onClick={handleClose}>No</GreenButton>
                </div>
                <div>
                    <RedButton onClick={() => {
                        handleClose()
                       // taskHandler() // taskhandler is not defined either we can remove this or we can make a functon taskHandler
                    }}>Yes</RedButton>
                </div>
            </DialogActions>
        </Dialog>
    );
}

export default AlertDialogSlide;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
