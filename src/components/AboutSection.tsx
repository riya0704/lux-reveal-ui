
import React from 'react';

const AboutSection = () => {
  const features = [
    {
      number: '01',
      title: 'Bio Ingredients',
      description: 'Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.'
    },
    {
      number: '02',
      title: 'Everything Natural',
      description: 'Pure ingredients for pure skin. The Perfect solution for your skin care needs.'
    },
    {
      number: '03',
      title: 'All Handmade',
      description: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <button className="bg-cream-100 text-forest-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
                Why Our Products
              </button>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-forest-dark mb-6 leading-tight">
                YOUR SKIN DESERVES
                <br />
                THE BEST CARE.
              </h2>
              <p className="text-sage-600 text-lg leading-relaxed">
                Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.number} className="flex items-start space-x-6">
                  <div className="text-4xl font-light text-sage-300">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-forest-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sage-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-12 flex items-center justify-between">
              <div>
                <div className="text-sm text-sage-600 mb-1">SINCE 2001</div>
              </div>
              <div>
                <button className="text-forest-dark hover:text-sage-600 transition-colors underline">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/885a894c-49e5-451c-a302-9f27926465df.png"
                alt="Skincare routine"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Award Badge */}
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-6 py-4 flex items-center space-x-3">
              <div className="w-8 h-8 bg-forest-dark rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L9.545 5.755H14.635L10.545 8.755L12.09 13.51L8 10.51L3.91 13.51L5.455 8.755L1.365 5.755H6.455L8 1Z" fill="#FEFFF4"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-forest-dark">Best Skin Care Product</div>
                <div className="text-xs text-sage-600">Award Winning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
