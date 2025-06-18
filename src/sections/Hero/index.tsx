"use client";
import Button from "@/components/Button";
import {
  HeroContainer,
  StyledHeroSubtitle,
  StyledHeroTitle,
  TitleWrapper,
} from "./styles";

export default function Hero() {
  return (
    <HeroContainer>
      <TitleWrapper>
        <StyledHeroSubtitle>
          Construindo soluções de hoje, ao infinito e além
        </StyledHeroSubtitle>
        <StyledHeroSubtitle>
          Junte-se a nós e tenha seu negócio nas estrelas!
        </StyledHeroSubtitle>
        <StyledHeroTitle>FOURCODING</StyledHeroTitle>
      </TitleWrapper>
    </HeroContainer>
  );
}
