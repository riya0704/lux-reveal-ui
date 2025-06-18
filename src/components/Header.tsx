
import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-cream-50 py-4 px-6 lg:px-12 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-forest-dark">
          SKINCARE
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-forest-dark hover:text-sage-600 transition-colors">All Products</a>
          <a href="#" className="text-forest-dark hover:text-sage-600 transition-colors">Serum</a>
          <a href="#" className="text-forest-dark hover:text-sage-600 transition-colors">Sunscreen</a>
          <a href="#" className="text-forest-dark hover:text-sage-600 transition-colors">Bundle</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-forest-dark cursor-pointer hover:text-sage-600 transition-colors" />
          <User className="w-5 h-5 text-forest-dark cursor-pointer hover:text-sage-600 transition-colors" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-forest-dark cursor-pointer hover:text-sage-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-forest-dark text-cream-50 text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
