import { Grid } from "@mui/material"
import React from "react"
import BasicCard from "../../component/common/BasicCard"
import ProgressStepper from "./ProgressStepper"



const Database = () =>{
    return(
        <Grid item xs={12} sx={{position: 'relative',
        padding: '48px 32px',
        minHeight: 'calc(100vh - 166px)',
        marginLeft: '220px',
        backgroundColor: '#eaeff1',}}>
            <BasicCard header={undefined} content={<ProgressStepper />}></BasicCard>
        </Grid>
    )
}
export default Database