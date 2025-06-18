"use client";
import React, { useState } from "react";
import {
  ProjectsContainer,
  StyledProjectsSubtitle,
  StyledProjectsTitle,
  TitleWrapper,
} from "./styles";
import ProjectDisplay from "@/components/ProjectDisplay";

export default function Projetos() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ProjectsContainer id="projetos">
      <TitleWrapper>
        <StyledProjectsTitle>Nossos projetos</StyledProjectsTitle>
        <StyledProjectsSubtitle>
          Projetos que desenvolvemos desde 2023
        </StyledProjectsSubtitle>
      </TitleWrapper>
      <ProjectDisplay
        tabs={[
          {
            title: "Safe Entry",
            description:
              "Sistema inteligente de segurança e controle de acesso para condomínios. Oferece registro digital de entradas, QR Codes para visitantes e comunicação integrada com a administração.",
          },
          {
            title: "Fazendata",
            description:
              "Plataforma de gestão agrícola com foco em produtividade e análise de dados em tempo real para fazendas de pequeno e grande porte.",
          },
        ]}
        activeTabIndex={activeTabIndex}
        onTabChange={(index) => setActiveTabIndex(index)}
      />
    </ProjectsContainer>
  );
}
