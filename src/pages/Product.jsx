import "./product.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {productRows} from "../chartdata";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Product() {
    const[data, setData]=useState(productRows)
    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id!==id));
    };
    const columns: GridColDef[] = [
        { field: 'product', headerName: 'product', width: 200, renderCell:(params)=>{
            return(
                <div className="productrlistuser">
                    <img className="img" src={params.row.img} alt="no pics"/>
                    {params.row.name}
                </div>
            )
        }},
        { field: 'stock', headerName: 'stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
        },
        {
          field: 'price',
          headerName: 'price',
          width: 160,},
        {
            field: 'action',
            headderName:'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/products/"+params.row.id}>
                    <button className="productlistedit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="productlisteditdelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];


  return (
    <div className="productList">

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
