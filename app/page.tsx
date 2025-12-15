"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      {/*<Careers />*/}
      <Contact />
    </div>
  );
}
