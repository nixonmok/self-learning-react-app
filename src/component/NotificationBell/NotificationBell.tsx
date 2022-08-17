import { Badge, IconButton, IconButtonProps, IconProps, PropTypes, Tooltip } from '@mui/material'
import React, { FC } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicMenu from '../common/BasicMenu';



const NotificationBell: FC<IconButtonProps> = (props) => {
    const [open, setOpen] = React.useState(false)
    const[anchorEl, setAnchorEl] = React.useState<null|HTMLElement>(null)

    const notification = [
        {
          id : 0,
          label: '1st notification'
        },
        {
          id : 1,
          label: '2nd notification'
        }
      ]

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement> ) =>{
        setAnchorEl(event.currentTarget); //set the menu position
        //anchorEl = position
        console.log("archor on");
        setOpen(true)
        
    }

    const handleClose = () =>{
        setOpen(false);
        console.log("close");
    }
    return (
        <>
            <Tooltip title={notification.length === 0 ? 'no new notification' : `you have ${notification.length} notification(s)`}>
                <IconButton
                    color={props.color}
                    onClick={notification.length? handleOpen : ()=>{}}
                >
                    <Badge badgeContent={notification.length} showZero>
                        <NotificationsIcon color='primary'></NotificationsIcon>
                    </Badge>
                </IconButton>
            </Tooltip>

            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose} menuItems={notification} />
        </>



    )
}

export default NotificationBell