import React from "react";
import { Button } from "./styles";
function CTAButton({
  btnText,
  onCLick,
  selected,
}: {
  btnText: string;
  onCLick: any;
  selected: boolean;
}) {
  return (
    <Button selected={selected} onClick={onCLick}>
      {btnText}
    </Button>
  );
}

export default CTAButton;
