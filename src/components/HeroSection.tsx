
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text reveal animation on scroll
    if (textRef.current) {
      const text = textRef.current;
      const words = text.textContent?.split(' ') || [];
      text.innerHTML = words.map(word => `<span class="word opacity-30">${word}</span>`).join(' ');
      
      gsap.to('.word', {
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1
        }
      });
    }

    // Hero image animation
    gsap.fromTo(imageRef.current, 
      { scale: 1.1, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power2.out",
        delay: 0.3 
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/79252edd-4b43-41d7-82b7-281097d9fe0e.png')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
          Feel Beautiful Inside and Out
          <br />
          <span className="block">with Every Product.</span>
        </h1>
        
        <p 
          ref={textRef}
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow.
        </p>

        <Button 
          className="bg-white text-forest-dark hover:bg-cream-100 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
