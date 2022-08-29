import React, { FC, useState } from 'react'
import Grid from '@mui/material/Grid';
import BasicCard from '../../component/common/BasicCard';
import SearchBar from '../../component/common/SearchBar';
import CommonButton from '../../component/common/CommonButton';
import { Box } from '@mui/system';
import { Button, ButtonProps, IconButton, Input, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import ReplayIcon from '@mui/icons-material/Replay';
import BasicModal from '../../component/common/BasicModal';
import ModalForm from './ModalForm';
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
    const [openModal, setOpenModal] = React.useState(false) //open modal form?
    const [users, setUsers] = React.useState<{}[]>([]) //show user data
    const [searchResult, setSearchResult] = React.useState(users) //copy users to searchResult(searchResult to keep original data)


    const handleOpenModal = () => {
        setOpenModal(true)
        console.log("open modal")
    }
    const handleChange = (value: string) => {
        console.log(value);
    }

    const addNewUser = (data: {}) => {
        users.push({ ...data })
    }


    const handleSearch = (eventValue: string) =>{
        const trimedInput = eventValue.trim();
        if(trimedInput === '')
            setUsers(searchResult);
        else{
            const filterResult = searchResult.filter((arrayElement: {}) => {
                const allKeys = Object.keys(arrayElement);

                return allKeys.some((stringKey: string)=>{

                    const objectValue:string = arrayElement[stringKey as keyof typeof arrayElement];
                    return objectValue.startsWith(trimedInput);
                })                
            })
            setUsers(filterResult)
        }        
         
    }

    return (
        <Grid item xs={12} sx={{ marginLeft: '220px', padding: '48px 32px', backgroundColor: '#f5f5f5', minHeight: '600px', position: 'relative' }}>
            <BasicCard
                header={<WrapperBox>
                    <SearchBar
                        placeholder='type user name to search'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)}
                        searchBarWidth='750px'
                    />

                    <CommonButton
                        variant='contained'
                        size='large'
                        onClick={handleOpenModal}
                        sx={{ fontSize: '1.05rem' }}>
                            Add User
                    </CommonButton>

                    <IconButton>
                        <ReplayIcon />
                    </IconButton>
                </WrapperBox>
                }
                content={
                    <>
                        {users.length? users.map((users:{userId:string, email:string, phoneNumber:string})=>(
                            <Box sx={{
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                                p: 2,
                                minWidth: 300,
                                borderColor: 'primary.main',
                                border: 1,
                                borderRadius: 2,
                                margin: 2
                              }}>
                                <Typography>User ID: {users.userId}</Typography>
                                <Typography>Email: {users.email}</Typography>
                                <Typography>Phone Number: {users.phoneNumber}</Typography>

                            </Box>
                        )):console.log("hi")
                        }
                        <Typography align='center' marginTop={'40px'} marginBottom={'16px'} fontSize={'1.3rem'} >
                            Type username to search
                        </Typography>
                    </>
                        
                }
            />
            <BasicModal
                open={openModal}
                onClose={() => { setOpenModal(false); }} >
                <ModalForm closeModal={() => { setOpenModal(false) }} addNewUser={addNewUser} />
            </BasicModal>
        </Grid>
    )
    //changeEvent type: https://bobbyhadz.com/blog/typescript-react-onchange-event-type
}

export default Authentication