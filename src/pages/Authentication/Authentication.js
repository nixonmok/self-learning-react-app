import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../../component/common/CommonButton';
import { Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationBell from '../../component/NotificationBell/NotificationBell';

const Authentication = () => {

    return (
        <Grid item xs={8}>
            This is authentication page.
            <CommonButton variant="default">
                hi
            </CommonButton>
            <Avatar src='https://p-bandai.com/img/hk/p/m/N2566807001002_001.jpg'></Avatar>
            <NotificationBell
            iconColor='error'
            />          
            
        </Grid>
    )
}

export default Authentication