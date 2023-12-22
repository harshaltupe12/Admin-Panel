import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
const Datatable = () => {
  const[data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id))
  }

    const actionCell = [
        { field: 'action', headerName: 'Actions', width: 200, renderCell: (params)=>{
            return(
                <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                    <div className="viewAction">View</div>
                  </Link>
                    <div className="deleteAction" onClick={() =>handleDelete(params.row.id)}>Delete</div>

                </div>
            )
        } },
    ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new user
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
          add new
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
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