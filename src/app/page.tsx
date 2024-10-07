"use client";
import { FC } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portofolio from "@/components/Portofolio";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portofolio />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default HomePage;
