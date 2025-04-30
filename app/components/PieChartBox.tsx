"use client";

import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

function PieChartBox() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="!text-2xl font-bold">Leads by Source</h1>
      <div className="chart flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 justify-between gap-2.5 !text-[10px]">
        {data.map((item) => (
          <div className="flex flex-col gap-1 items-center " key={item.name}>
            <div className="flex gap-2.5 items-center">
              <div className="w-2.5 h-2.5 rounded-[50%]" style={{ backgroundColor: item.color }} />
              <span className="!text-[12px]">{item.name}</span>
            </div>
            <span className="!text-[12px]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
