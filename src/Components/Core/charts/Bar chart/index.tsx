import React from "react";
import {
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
} from "recharts";

function CustomBarChart({
  data,
  width,
  height,
}: {
  data: any;
  width: any;
  height: any;
}) {
  return (
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="20 20" />
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="subjectScores" fill="#8884d8" />
      <Bar dataKey="subjectScoresTwo" fill="#82ca9d" />
    </BarChart>
  );
}

export default CustomBarChart;
