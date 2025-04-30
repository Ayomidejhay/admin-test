'use client';

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

function BarChartBox(props: Props) {
  const { title, color, dataKey, chartData } = props;
  return (
    <div className='w-full h-full'>
        <h1 className='!text-[20px] !mb-5'>{title}</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={chartData}>
                    <Tooltip 
                        contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{fill: "none"}}
                    />
                    <Bar dataKey={dataKey} fill={color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox