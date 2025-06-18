
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gsap } from 'gsap';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const faqs = [
    {
      question: 'Are your products safe for sensitive skin?',
      answer: 'Yes, all our products are dermatologically tested and formulated with gentle, natural ingredients suitable for sensitive skin types.'
    },
    {
      question: 'Are your products cruelty-free?',
      answer: 'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.'
    },
    {
      question: "What's your return policy?",
      answer: 'We offer a 30-day return policy for unopened products. If you\'re not satisfied, contact our customer service team for assistance.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.'
    },
    {
      question: 'How do I choose the right product?',
      answer: 'Consider your skin type, concerns, and goals. Our product descriptions include detailed information to help you make the best choice.'
    }
  ];

  const toggleFAQ = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    const newIndex = isCurrentlyOpen ? null : index;
    
    if (!isCurrentlyOpen) {
      // Opening animation
      const content = document.getElementById(`faq-content-${index}`);
      if (content) {
        gsap.fromTo(content, 
          { height: 0, opacity: 0 },
          { 
            height: 'auto', 
            opacity: 1, 
            duration: 0.4, 
            ease: "power2.out" 
          }
        );
      }
    } else {
      // Closing animation
      const content = document.getElementById(`faq-content-${index}`);
      if (content) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
    
    setOpenIndex(newIndex);
  };

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=750&fit=crop"
                alt="Skincare products"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Support Badge */}
            <div className="absolute bottom-8 left-8 bg-forest-dark text-white rounded-full px-6 py-4 flex items-center space-x-3">
              <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" fill="currentColor"/>
                  <path d="M8 6v4M8 4h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">24/7 We're Here</div>
                <div className="text-xs text-sage-200">to Help You</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8">
              <button className="bg-cream-100 text-forest-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                Frequently Asked Question
              </button>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-forest-dark mb-6 leading-tight">
                Answers to Your
                <br />
                Skincare Questions, All
                <br />
                in One Place.
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-sage-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cream-50 transition-colors duration-200"
                  >
                    <span className="text-forest-dark font-medium pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-forest-dark" />
                      ) : (
                        <Plus className="w-5 h-5 text-forest-dark" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    id={`faq-content-${index}`}
                    className={`overflow-hidden ${openIndex === index ? 'block' : 'hidden'}`}
                  >
                    <div className="px-6 pb-4 text-sage-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
