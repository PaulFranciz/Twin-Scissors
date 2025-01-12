'use client';

import Navigation from "@/components/common/Navigation";
import { PageTransition } from "@/components/ui/Transition";
import AboutUs from "@/Landing/AboutUs";
import Footer from "@/Landing/Footer";
import Hero from "@/Landing/Hero";
import CtaSection from "@/Landing/CtaSection"
import FAQSection from "@/Landing/FAQ";


const Index = () => {
  return (
    <PageTransition>
        <Navigation />
        <Hero />
        <AboutUs />
        <CtaSection />
        <FAQSection />
        <Footer />

    </PageTransition>
  );
};

export default Index;