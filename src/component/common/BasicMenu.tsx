import React, { FC } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface menuProps{
  anchorEl: null|HTMLElement;
  open : boolean;
  handleClose : () => (void);
  menuItems : {
    id: number,
    label: string
  }[];
}

const BasicMenu:FC<menuProps> = (props) => {

  return (
    <Menu
      id="basic-menu"
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {
        props.menuItems.map(
          (itemInsideArray)=>(
            <MenuItem onClick={props.handleClose}>{itemInsideArray.label}</MenuItem>
          )      
        )
      }
    </Menu>

  )
}

export default BasicMenu