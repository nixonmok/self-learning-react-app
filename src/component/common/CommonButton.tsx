import React, { FC } from 'react'
import Button, { ButtonProps } from '@mui/material/Button';

const CommonButton:FC<ButtonProps> = (props) => {
    return (
        <Button
            color={props.color}
            disabled={props.disabled}
            size={props.size}
            sx={props.sx}
            variant={props.variant}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

export default CommonButton