import { Grid } from "@mui/material";
import React, { useState } from "react";
import LineChartComponent from "../../Components/LineChartComponent";
import CTAButton from "../../Components/Core/Button/CTAButton";

import { ChartSection, HomePageWrapper, Navbar, SubContent } from "./styles";
import BarChartComponent from "../../Components/BarChartComponent";

type ChartState = "LINE" | "BAR";
function HomePage() {
  const [state, setState] = useState<ChartState>("LINE");
  console.log(state, "ssss");
  return (
    <HomePageWrapper item lg={12}>
      <Navbar item lg={12} />
      <SubContent>
        <Grid item lg={12} display="flex" justifyContent={"flex-end"}>
          <Grid>
            <CTAButton
              selected={state === "LINE" ? true : false}
              btnText="Line"
              onCLick={() => setState("LINE")}
            />
            <CTAButton
              selected={state === "BAR"}
              btnText="Bar"
              onCLick={() => setState("BAR")}
            />
          </Grid>
        </Grid>
        <ChartSection item lg={12}>
          {state === "LINE" ? <LineChartComponent /> : <BarChartComponent />}
        </ChartSection>
      </SubContent>
    </HomePageWrapper>
  );
}

export default HomePage;
