"use client";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";
import { theme } from "@/constants/theme";

export const StyledButton = styled.button<Pick<ButtonProps, "color">>`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: ${theme.colors.primary};
      color: white;

      &:hover {
        background-color: rgb(180, 28, 180);
      }
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.background};

      &:hover {
        background-color: #1a1a1a;
      }
    `}

  ${({ color }) =>
    color === "hollow" &&
    css`
      background-color: transparent;
      color: #0e0e0eAF;
      border: 1px solid #0e0e0e25;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}
`;

export const StyledText = styled.p`
  font-family: var(--font-dm-sans);
  font-size: 12pt;
  font-weight: 400;
`;
