'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: string | number;
    percentage: number;
    chartData: object[];
}



function ChartBox(props: Props) {
  const { color, icon, title, dataKey, number, percentage, chartData } = props;
  return (
    <div className="flex  h-full">
      <div className="box-info flex-3 flex flex-col justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src={icon}
            alt="chart"
            width={20}
            height={20}
            className="icon"
          />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link href="#" style={{ color: color }} className="!text-[12px] font-light flex items-center gap-2.5">
          View all
        </Link>
      </div>
      <div className="chart-info flex-2 flex flex-col justify-between">
        <div className="chart w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={chartData}>
                <Tooltip 
                    contentStyle={{ backgroundColor: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: -10, y: 40 }}
                />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span className={`percentage font-bold !text-xl ${percentage < 0 ? 'text-[tomato]' : 'text-[limegreen]' }`}>{percentage}</span>
          <span className="duration !text-sm">this month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
