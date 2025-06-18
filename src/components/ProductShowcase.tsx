
import React from 'react';

const ProductShowcase = () => {
  const categories = [
    { name: 'NEW ARRIVAL', active: true },
    { name: 'CLEANSING', active: false },
    { name: 'ACNE FIGHTER', active: false },
    { name: 'ANTI AGEING', active: false }
  ];

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

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-forest-dark mb-8 leading-tight">
            Feel Beautiful Inside and Out
            <br />
            <span className="block">with Every Product.</span>
          </h2>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-forest-dark text-cream-50'
                    : 'bg-transparent border border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-cream-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
