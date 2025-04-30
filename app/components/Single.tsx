'use client";';

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Image from "next/image";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

function Single({ id, img, title, info, chart, activities }: Props) {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="info">
          <div className="flex items-center gap-5">
            {img && <Image width={100} height={100} src={img} alt="img" className="w-[100px] h-[100px] rounded-[20px] object-cover"/>}
            <h1 className="font-medium">{title}</h1>
            <button>Update</button>
          </div>
          <div className="text-[18px]">
            {Object.entries(info).map((item) => (
              <div className="font-semibold !mr-2.5 capitalize" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-0 border-[0.5px] border-solid border-gray-500"/>
        {chart && (
          <div className="!mt-[50px] w-[80%] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="!mb-5">Latest Activities</h2>
        {activities && (
          <ul className="singleList">
            {activities.map((activity) => (
              <li className="list-none relative w-[1px] !pt-[50px] bg-[#f45b69]  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-full after:bg-[#f45b69] after:-translate-x-1/2 after:transform" key={activity.text}>
                <div className="min-w-[250px] md:min-w-[480px] !p-3.5 bg-[#f45b6810]">
                  <p className="!mb-1.5">{activity.text}</p>
                  <time className="text-xs">{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Single;
