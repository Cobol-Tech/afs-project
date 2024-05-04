import About from "@/components/About";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </>
  )
};

export default Landing;