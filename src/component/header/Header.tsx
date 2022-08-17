import { Box, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar'
import React, { FC, useState } from 'react'
import CommonButton from '../common/CommonButton';
import NotificationBell from '../NotificationBell/NotificationBell'
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';

const WrapperBox = styled(Box)`
      background-color: #009be5;
      width: 100%;
      flex-direction: column;
      padding: 20px;
`;

const TopRowBox = styled(Box)`
      display: flex;
      flex-direction: row;
      justify-content: end;
      allign-items: center;
      margin-right: 5px;
      margin-bottom: 20px;
`
const MiddleRowBox = styled(Box)`
      display: flex;
      flex-direction: row;
      allign-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      margin-left: 320px;
  `

  const LinkTypography = styled(Typography)`
    font-weight: 500;
    color: rgba(255,255,255,0.7);
    &:hover{
      color: #fff;
      cursor: pointer;
    };
  `

interface titleProps{
  title:string;
}
const Header:FC<titleProps> = (props) => {
  console.log(props.title);
  return (
    <WrapperBox>

      <TopRowBox>
      <LinkTypography>
      Go to Docs
      </LinkTypography>
        <NotificationBell
          color='error'
        />
        <Avatar src='https://p-bandai.com/img/hk/p/m/N2566807001002_001.jpg' alt='cute kirby'></Avatar>
      </TopRowBox>

      <MiddleRowBox>

        <Typography variant="h2" color="white">
          {props.title}
        </Typography>

        <Box>
          <CommonButton variant="outlined" sx={{marginRight:'5px'}}>
            Web setup
          </CommonButton>

          <IconButton>
            <HelpIcon />
          </IconButton>
        </Box>

      </MiddleRowBox>

    </WrapperBox>
  )
}

export default Header