import React from "react";
import { Link } from "react-router-dom";
import {
  Demo,
  FAQ,
  Features,
  Footer,
  Hero,
  Testimonials,
} from "../../components";

const Landing = () => {
  return (
    <div className="w-screen h-screen prevent-select">
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Landing;
