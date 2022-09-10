import { Grid } from "@mui/material";
import React from "react";
import {
  ProjectHeader,
  SideBarBody,
  SideBarSubContents,
  SideBarWrapper,
} from "./styles";
import { SideBarComponents } from "./utils";

function SideBar() {
  return (
    <SideBarWrapper>
      <ProjectHeader lg={12}>
        <p>Project Name</p>
      </ProjectHeader>
      <SideBarBody lg={12}>
        <Grid lg={12}>
          {Array.isArray(SideBarComponents) &&
            SideBarComponents.length > 0 &&
            React.Children.toArray(
              SideBarComponents.map((value) => (
                <SideBarSubContents lg={12}>{value}</SideBarSubContents>
              ))
            )}
        </Grid>
        <Grid>
          <SideBarSubContents>LogOut &#8594; </SideBarSubContents>
        </Grid>
      </SideBarBody>
    </SideBarWrapper>
  );
}

export default SideBar;
