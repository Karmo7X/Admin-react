import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns ,userRows } from '../../datartablesource';
import './datatable.css'
import { Link } from 'react-router-dom';



const Datatable = () => {

  const [data,setData]=useState(userRows)


  const handleDelete =(id)=>
  {
    setData(data.filter((item) => item.id !==id))
  }

    const actionColumn =[{field :"action" , headerName:"Action",width:200,
     renderCell:(params)=>
     {
        return(
            <div className="cellAction">
                <Link to="/user/test" style={{textDecoration:'none'}}>
        <div className="viewButton">view</div>
        </Link>
                
                <div className="deleteButton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
            </div>
        )
     }
}]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
            Add New User
            <Link to="/user/new" style={{textDecoration:'none'}} className="link">
           Add  New
      </Link>
        </div>
       <DataGrid
       className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
