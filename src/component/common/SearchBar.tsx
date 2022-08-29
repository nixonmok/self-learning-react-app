import { Input } from '@mui/material';
import React, { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search';

interface searchBarProps{
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
    searchBarWidth: string
}
const SearchBar:FC<searchBarProps> = (props) => {
    return (
        <div>
            <SearchIcon sx={{paddingRight:'10px', paddingTop:'5px'}}/>            
            <Input 
            placeholder={props.placeholder} 
            onChange={props.onChange}
            sx={{width: props.searchBarWidth,
            color: '#616161',
            fontSize: '1.1rem'
            }} 
            disableUnderline={true}/>
        </div>
    )
}

export default SearchBar