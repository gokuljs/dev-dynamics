import { Grid } from "@mui/material";
import React from "react";
import CustomLineChart from "../Core/charts/Line chart";
import { ChartComponentWrapper } from "./styles";
import { combineData, customData, customDataTwo } from "./utils";

function LineChartComponent() {
  return (
    <ChartComponentWrapper lg={12} spacing={4}>
      <Grid lg={12} display="flex" justifyContent="space-around">
        <CustomLineChart data={customData} width={400} height={400} />
        <CustomLineChart data={customDataTwo} width={400} height={400} />
      </Grid>
      <Grid className="chart3" lg={12} display="flex" justifyContent="center">
        <CustomLineChart data={combineData} width={900} height={500} />
      </Grid>
    </ChartComponentWrapper>
  );
}

export default LineChartComponent;
