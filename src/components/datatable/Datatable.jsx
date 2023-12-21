import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows } from '../../datatablesource';
const Datatable = () => {

    const actionCell = [
        { field: 'action', headerName: 'Actions', width: 200, renderCell: ()=>{
            return(
                <div className="cellAction">
                    <div className="viewAction">View</div>
                    <div className="deleteAction">Delete</div>

                </div>
            )
        } },
    ]
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumn.concat(actionCell)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable