import { Box, Button, TextField, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

interface ModalBoxProps{
    closeModal : ()=>void,
    addNewUser : ({})=>void
}

const defaultInputvalues ={
    userId: '',
    email: '',
    phoneNumber: '',
}


const ModalForm:FC<ModalBoxProps> = (props) => {
    const onSubmit = (data: {}) =>{
        props.addNewUser(data)
        props.closeModal()
    }

    const schema = Yup.object().shape({
        userId: Yup.string().required("required").min(6,"at least 6 characters"),
        email: Yup.string().required("required").email("Email is invalid"),
        phoneNumber: Yup.string().required("required"),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const [formValue, setFormValue] = React.useState(defaultInputvalues)

    const handleChange = (value: React.SetStateAction<{ userId: string; email: string; phoneNumber: string; }>) => {
        setFormValue(value);
    }


    //mt = line spcing


    return (
        <Box>
            <Typography variant="h6" component="h2">
                New User
            </Typography>
            <Typography sx={{ mt: 2 }}> 
                Fill out inputs and press 'submit' button
            </Typography>

            <TextField required {...register('userId')} fullWidth={true} label="username" sx={{mt:1}}
            error={errors.userId ? true:false} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                handleChange({...formValue, userId: event.target.value})
            }}/>
            
            <TextField required {...register('email')} fullWidth={true} label="Email" sx={{mt:1}}
            error={errors.email ? true:false} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                handleChange({...formValue, email: event.target.value})
            }}/>

            <TextField required {...register('phoneNumber')} fullWidth={true} label="Phone number" sx={{mt:1}} 
            error={errors.phoneNumber ? true:false} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                handleChange({...formValue, phoneNumber: event.target.value})
            }}/>

            <Button onClick={handleSubmit(onSubmit)}>submit</Button>
            <Button onClick={props.closeModal}>cancel</Button>
        </Box>
    )
}

export default ModalForm