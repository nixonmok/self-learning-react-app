import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';import React, { FC } from 'react'
import { Input } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 1050px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    borderRadius: 8px;
`

interface cardProps{
    header: React.ReactNode,
    content: React.ReactNode
}
const BasicCard:FC<cardProps> = (props) => {
    return (
        <StyledCard>
            {props.header}            
            <CardContent>
                {props.content}
            </CardContent>
        </StyledCard>)
}

export default BasicCard