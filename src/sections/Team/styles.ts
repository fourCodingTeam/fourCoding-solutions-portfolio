"use client";
import { theme } from "@/constants/theme";
import styled from "styled-components";

export const TeamsContainer = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem;
  @media ${theme.media.tablet} {
    min-height: 80dvh;
  }
`;
