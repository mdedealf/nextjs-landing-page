"use client";
import { FC, ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portofolio from "@/components/Portofolio";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header bg={"bg-light-gray"} />
        <main>
          <Hero />
          <About />
          <Portofolio />
          <Gallery />
          <Testimonials />
          <Footer />
        </main>
        {/* {children} */}
      </body>
    </html>
  );
};
export default RootLayout;
