
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import AboutSection from '../components/AboutSection';
import BestSellers from '../components/BestSellers';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.set(pageRef.current, { opacity: 0 })
      .to(pageRef.current, { 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.out" 
      });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-cream-50">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <BestSellers />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
