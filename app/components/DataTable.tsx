"use client";

import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

function DataTable(props:Props) {

  const handleDelete = (id: number) => {
    // Handle delete action here
    //axios.delete(`/api/${props.slug}/${id}`)
    console.log("Delete user with id:", id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-center h-full gap-2.5">
          <Link href='#'>
            <Image
              width={20}
              height={20}
              src="/view.svg"
              alt="view"
              className="h-[20px] w-[20px] object-cover cursor-pointer "
            />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <Image
              width={20}
              height={20}
              src="/delete.svg"
              alt="delete"
              className="h-[20px] w-[20px] object-cover cursor-pointer"
            />
          </div>
        </div>
      );
    },
  }

  return (
    <div className="dataTable ">
      <DataGrid
        className="bg-white !p-5"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        //to show filter
        //slots={{
        //  toolbar: GridToolbar,
        //}}
        
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        showToolbar
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
}

export default DataTable;
