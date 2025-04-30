'use client'

import React, { useState } from 'react'

import DataTable from '../components/DataTable';
import Add from '../components/Add';
import { products } from '../data';
import { GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Image",
    width: 70,
    renderCell: (params) => {
      return <div className="flex items-center justify-center h-full">
            <Image width={40} height={40} src={params.row.img || "/noavatar.png"} alt="avatar" className="h-[40px] w-[40px]  object-cover "/>      
            </div>;;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 70,
    type: "boolean",
  },
];

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="flex items-center gap-5 !mb-5">
        <h1>Products</h1>
        <button className="!p-1.5 cursor-pointer bg-gray-300" onClick={() => setOpen(true)}>Add New Product</button>
      </div>

      <DataTable slug='products' columns={columns} rows={products} />

      {open && <Add setOpen={setOpen} slug="products" columns={columns} />}
    </div>
  )
}
