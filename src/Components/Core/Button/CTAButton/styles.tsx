import { styled, Button as muiButton } from "@mui/material";

export const Button = styled(muiButton)(
  ({ selected }: { selected: boolean }) => ({
    border: "1px solid blue",
    padding: "8px 24px",
    marginRight: "1rem",
    color: selected ? "#fff" : "blue",
    background: selected ? "blue" : "#fff",
    "&:hover": {
      backgroundColor: "orange",
      color: "black",
      border: "1px solid orange",
    },
  })
);
