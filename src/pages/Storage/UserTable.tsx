import React, { useEffect } from 'react'
import DataTable from '../../component/common/DataTable'
import {GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { height } from '@mui/system';

const rows: GridRowsProp = [ //example
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'name', width: 200 },
    { field: 'username', headerName: 'username', width: 150 },
    { field: 'phone', headerName: 'phone', width: 200 },
    { field: 'website', headerName: 'website', width: 150 },
    { field: 'company', headerName: 'company', width: 300, valueFormatter: (field)=> field.value.name},


  ]; //value formatter's parameters = field

const UserTable = () => {
    const [userData, setUserData] = React.useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => {
                const addData = json
                setUserData(addData)
            })
    },[])

  return (
    <DataTable 
        rows={userData}
        columns={columns}
        loading={!userData.length}
        sx={{height:'500px'}}
        />
  )
}

export default UserTable