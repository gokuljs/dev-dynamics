import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function CustomLineChart({
  data,
  width,
  height,
}: {
  data: any[];
  width: number;
  height: number;
}) {
  return (
    <LineChart width={width} height={height} data={data}>
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="10 10" />
      <Line type="monotone" dataKey="subjectScores" stroke="#8884d8" />
      <Line type="monotone" dataKey="subjectScoresTwo" stroke="#82ca9d" />
    </LineChart>
  );
}

export default CustomLineChart;
