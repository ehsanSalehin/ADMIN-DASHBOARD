import "./userlist.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../chartdata";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Userlist() {
    const [data,setData]=useState(userRows);
    
    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id !== id))
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User name', width: 200, renderCell:(params)=>{
            return(
                <div className="userlistuser">
                    <img className="avatar" src={params.row.avatar} alt="no pics"/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,},
        {
            field: 'action',
            headderName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/users/"+params.row.id}>
                    <button className="userlistedit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="userlisteditdelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];
      

  return (
    <div className="userlist">
        <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
