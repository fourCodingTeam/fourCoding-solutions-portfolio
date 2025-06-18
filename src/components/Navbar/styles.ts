"use client";
import { theme } from "@/constants/theme";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: transparent;
  padding: 1rem;
`;

export const StyledNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
