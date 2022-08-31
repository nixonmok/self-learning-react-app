import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { SxProps, Theme } from '@mui/material';

interface DataGridProps{
    loading: boolean | undefined;
    rows: GridRowsProp;
    columns: GridColDef[];
    sx?: SxProps<Theme>;
}
const DataTable:FC<DataGridProps> = (props) => {
    
      return (
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={props.rows} columns={props.columns} loading={props.loading} sx={props.sx}/>
        </div>
      );
    }


export default DataTable