"use client";

import React, { use, useState } from "react";

import DataTable from "../components/DataTable";
import { userRows } from "../data";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Add from "../components/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 70,
    renderCell: (params) => {
      return <div className="flex items-center justify-center h-full">
      <Image width={30} height={30} src={params.row.img || "/noavatar.png"} alt="avatar" className="h-[30px] w-[30px] rounded-full object-cover "/>      
      </div>;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 70,
    type: "boolean",
  },
];

export default function page() {

  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="flex items-center gap-5 !mb-5">
        <h1>Users</h1>
        <button className="!p-1.5 cursor-pointer bg-gray-300" onClick={() => setOpen(true)}>Add New User</button>
      </div>

      <DataTable slug='users' columns={columns} rows={userRows} />

      {open && <Add setOpen={setOpen} slug="users" columns={columns} />}
    </div>
  );
}
