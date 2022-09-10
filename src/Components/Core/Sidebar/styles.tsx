import { Grid, styled } from "@mui/material";

export const SideBarWrapper = styled(Grid)`
  width: 300px;
  height: 100vh;
  border-right: 0.2px solid #ded6d6;
`;

export const ProjectHeader = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  padding: 20px;
  font: 500 1.625rem/0.5rem sans-serif;
  text-transform: capitalize;
`;

export const SideBarBody = styled(Grid)`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SideBarSubContents = styled(Grid)`
  padding: 20px;
  width: 100%;
  font: 400 1.2rem/0.5rem sans-serif;
  color: grey;
  :hover {
    color: black;
  }
`;
