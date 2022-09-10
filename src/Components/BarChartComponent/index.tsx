import { Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";
import CustomBarChart from "../Core/charts/Bar chart";
import { BarChartComponentWrapper } from "./styles";
import { combineData, customData, customDataTwo } from "./utils";

function BarChartComponent() {
  return (
    <BarChartComponentWrapper>
      <Grid item lg={12} display={"flex"} justifyContent={"space-around"}>
        <CustomBarChart data={customData} width={400} height={400} />
        <CustomBarChart data={customDataTwo} width={400} height={400} />
      </Grid>
      <Grid
        className="combinedChart"
        lg={12}
        display="flex"
        justifyContent="center"
      >
        <CustomBarChart data={combineData} width={1050} height={400} />
      </Grid>
    </BarChartComponentWrapper>
  );
}

export default BarChartComponent;
