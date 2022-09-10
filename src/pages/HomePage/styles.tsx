import { Grid, styled } from "@mui/material";

export const HomePageWrapper = styled(Grid)`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`;

export const Navbar = styled(Grid)`
  width: (100%-300px);
  height: 50px;
  margin: 0;
  background-color: #f9f5f5;
`;

export const SubContent = styled(Grid)`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const ChartSection = styled(Grid)`
  width: 100%;
  height: 100%;
  margin-top: 45px;
`;
