import { theme } from "@/constants/theme";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100dvw;
  min-height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: radial-gradient(
    circle at right,
    ${theme.colors.primary},
    ${theme.colors.background} 40%
  );
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProjectsTitle = styled.h1`
  font-family: var(--font-figtree);
  font-size: 32pt;
  font-weight: 900;
  color: ${theme.colors.secondary};
`;

export const StyledProjectsSubtitle = styled.p`
  font-family: var(--font-dm-sans);
  font-size: 12pt;
  font-weight: 400;
  color: rgba(14, 14, 14, 0.44);
`;
