import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import React from 'react';
import { mainNavbarItems } from './consts/navbarItems';

import {
    useParams,
    useNavigate,
    useLocation,
  } from "react-router-dom";

function Navbar() {
    const drawerWidth = 220;
    const navigate = useNavigate();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#101F33',
                    color: 'rgba(255,255,255,0.7)',
                },

            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {mainNavbarItems.map((item, index) => (
                    <ListItem button 
                    key={item.id}
                    onClick={()=>{navigate(item.route)}}>
                            <ListItemIcon sx={{color: 'rgba(255,255,255,0.7)' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            
        </Drawer>
    )
}

export default Navbar;