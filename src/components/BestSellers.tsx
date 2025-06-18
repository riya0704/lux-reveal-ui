
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const buttonLeftRef = useRef<HTMLButtonElement>(null);
  const buttonRightRef = useRef<HTMLButtonElement>(null);

  const products = [
    {
      id: 1,
      name: 'ALYA SKIN CLEANSER.',
      price: 'FROM $29.99',
      image: '/lovable-uploads/a980d791-f103-4c8f-8c3b-2ac3e910ae20.png'
    },
    {
      id: 2,
      name: 'RITUAL OF SAKURA.',
      price: 'FROM $27.99', 
      image: '/lovable-uploads/54c628b3-5617-45b5-8d5d-f5034b34873d.png'
    },
    {
      id: 3,
      name: 'THE BODY LOTION.',
      price: 'FROM $19.99',
      image: '/lovable-uploads/01899004-61a9-4f5e-b2be-1cdb042c670b.png'
    }
  ];

  useEffect(() => {
    // Animate buttons on mount
    gsap.fromTo([buttonLeftRef.current, buttonRightRef.current], 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );
  }, []);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
    
    // Button animation
    gsap.to(buttonRightRef.current, {
      scale: 1.2,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    // Button animation
    gsap.to(buttonLeftRef.current, {
      scale: 1.2,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <button className="bg-cream-100 text-forest-dark px-4 py-2 rounded-full text-sm font-medium mb-4">
              Best Selling Products
            </button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-forest-dark leading-tight">
              Skincare That Brings Out
              <br />
              Your Natural Radiance
            </h2>
          </div>

          {/* Navigation Buttons - Hidden on mobile, shown on tablet and desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              ref={buttonLeftRef}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-sage-300 flex items-center justify-center hover:bg-sage-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={buttonRightRef}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-forest-dark text-white flex items-center justify-center hover:bg-sage-700 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / products.length)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-forest-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sage-600 mb-4">{product.price}</p>
                    <button className="w-full bg-forest-dark text-cream-50 py-3 rounded-lg hover:bg-sage-700 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-sage-300 flex items-center justify-center hover:bg-sage-300 hover:text-white transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-forest-dark text-white flex items-center justify-center hover:bg-sage-700 transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-forest-dark' : 'bg-sage-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
