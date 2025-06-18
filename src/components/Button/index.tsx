"use client";
import React from "react";
import { StyledButton, StyledText } from "./styles";
import { ButtonProps } from "./types";

export default function Button({
  color = "primary",
  text,
  type,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton color={color} onClick={onClick} type={type}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
}
