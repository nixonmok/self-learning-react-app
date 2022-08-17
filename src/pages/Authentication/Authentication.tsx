import React from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from '../../component/common/BasicCard';
import SearchBar from '../../component/common/SearchBar';
import CommonButton from '../../component/common/CommonButton';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import ReplayIcon from '@mui/icons-material/Replay';
const WrapperBox = styled(Box)`
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-bottom: 1px solid #bdbdbd;
    height: 65px;
`

const Authentication = () => {
    const handleChange = (value: string) =>{
        console.log(value);
    }
    return (
        <Grid item xs={12} sx={{marginLeft:'220px', padding:'48px 32px', backgroundColor: '#f5f5f5', minHeight: '600px',position: 'relative'}}>
        <BasicCard 
        header={<WrapperBox>
        <SearchBar 
        placeholder='fuck you'
        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>handleChange(event.target.value)}
        searchBarWidth='750px'
        />

        <CommonButton 
        variant='contained'
        size='large'
        sx={{fontSize: '1.05rem'}}>Button
        </CommonButton>

        <IconButton>
            <ReplayIcon/>
        </IconButton>
        </WrapperBox>
        }
        content={
            <Typography align='center' marginTop={'40px'} marginBottom={'16px'} fontSize={'1.3rem'}>
                fuck you
            </Typography>
        }


        />
        </Grid>
    )
    //changeEvent type: https://bobbyhadz.com/blog/typescript-react-onchange-event-type
}

export default Authentication