import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />
        <Destinations />
        <Services />
        <AboutUs />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
