"use client";
import Advantages from "@/sections/Advantages";
import ContactForm from "@/sections/ContactForm";
import Hero from "@/sections/Hero";
import Projetos from "@/sections/Projetos";
import Team from "@/sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Projetos />
      <Team />
      <ContactForm />
      {/* <Advantages /> */}
    </>
  );
}
