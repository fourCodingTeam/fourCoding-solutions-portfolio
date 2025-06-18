import React from "react";
import { TeamsContainer } from "./styles";
import { StyledSubtitle, StyledTitle, TitleWrapper } from "../styles";

export default function Team() {
  return (
    <TeamsContainer id="time">
      <TitleWrapper>
        <StyledTitle>Nosso time</StyledTitle>
        <StyledSubtitle>Time de desenvolvimento responsável pela FourCoding</StyledSubtitle>
      </TitleWrapper>
    </TeamsContainer>
  );
}
