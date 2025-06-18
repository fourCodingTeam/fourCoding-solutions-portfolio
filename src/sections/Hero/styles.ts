"use client";
import { theme } from "@/constants/theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100dvw;
  min-height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  padding: 2rem;
  background: radial-gradient(
    circle at top,
    ${theme.colors.primary},
    ${theme.colors.background} 40%
  );
`;

export const StyledHeroTitle = styled.h1`
  font-family: var(--font-figtree);
  font-size: 48pt;
  font-weight: 900;
  color: ${theme.colors.secondary};
`;

export const StyledHeroSubtitle = styled.p`
  font-family: var(--font-dm-sans);
  font-size: 12pt;
  font-weight: 400;
  color: rgba(14, 14, 14, 0.44);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 75%;
  height: 100dvh;
  aspect-ratio: 16/28;
`;
