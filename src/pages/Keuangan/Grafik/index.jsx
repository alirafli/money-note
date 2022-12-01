import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Year", "Sales"],
  ["minggu 1", 25000],
  ["minggu 2", 35000],
  ["minggu 3", 50000],
  ["minggu 4", 10000],
];
export const options = {
  title: "Grafik Bulan Ini",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};
const Grafik = () => {
  return (
    <div>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Grafik;
