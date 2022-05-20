import React from "react";
import { PrimaryButtonStyled } from "./button.styles";

export const PrimaryButton = ({ children, ...props }) => (
  <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>
);
