import { Button, Grid, Skeleton } from "@mui/material"
import React, { useEffect } from "react"
import BasicSnackBar from "../../component/common/BasicSnackBar"
import DataTable from "../../component/common/DataTable"
import UserTable from "./UserTable"
const Storage = () => {
    const [open, setOpen] = React.useState(false)


    const handleClick = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Grid item xs={12} sx={{ marginLeft: '220px', padding: '48px 32px', backgroundColor: '#f5f5f5', minHeight: '600px', position: 'relative' }}>
            <Button onClick={handleClick}>openSnackBar</Button>
            <UserTable></UserTable>


            <BasicSnackBar snackbarOpen={open}
                snackbarAutoHideDuration={5000}
                snackbarOnClose={handleClose}
                alertOnClose={handleClose}
                message={"test snackbar"}
                severity={"error"}
            />
        </Grid>
    )
}
export default Storage