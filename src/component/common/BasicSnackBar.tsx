import { Alert, AlertProps, Snackbar, SnackbarProps } from '@mui/material'
import React, { FC } from 'react'

interface SnackbarAndAlert{
    alertOnClose: AlertProps["onClose"];
    snackbarOnClose: SnackbarProps["onClose"];
    snackbarOpen: SnackbarProps["open"];
    snackbarAutoHideDuration: SnackbarProps["autoHideDuration"];
    message: AlertProps["children"];
    severity?: AlertProps["severity"]
}
const BasicSnackBar:FC<SnackbarAndAlert> = (props) => {

  return (
    <Snackbar anchorOrigin={{vertical:'bottom', horizontal:'left'}}
    open={props.snackbarOpen} 
    onClose={props.snackbarOnClose} 
    autoHideDuration={props.snackbarAutoHideDuration} >
        <Alert onClose={props.alertOnClose} severity={props.severity}>{props.message}</Alert>
    </Snackbar>
  )
}

export default BasicSnackBar