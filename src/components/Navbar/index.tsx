"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { NavbarWrapper, StyledNavbarContainer } from "./styles";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <NavbarWrapper>
      <StyledNavbarContainer>
        <Image
          src={"/images/four-coding-logo.svg"}
          height={46}
          width={46}
          alt=""
        />
      </StyledNavbarContainer>
      {isMobile && <></>}
    </NavbarWrapper>
  );
}
