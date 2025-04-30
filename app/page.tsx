import Image from "next/image";
import TopBox from "./components/TopBox";
import ChartBox from "./components/ChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "./data";
import BarChartBox from "./components/BarChartBox";
import BigChartBox from "./components/BigChartBox";
import PieChartBox from "./components/PieChartBox";

export default function Home() {
  return (
    <div className="home grid gap-5 grid-cols-4 ">
      <div className="box box1 col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4 col-span-1 row-span-3">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7 col-span-2 row-span-2">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
