
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-forest-dark text-cream-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">SKINCARE</div>
            <p className="text-sage-300 mb-6">
              Transform your skincare routine with premium products that restore, protect, and enhance your natural glow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sage-300">
              <li><a href="#" className="hover:text-cream-50 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Serum</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Sunscreen</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Bundle</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sage-300">
              <li><a href="#" className="hover:text-cream-50 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-cream-50 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-sage-300 mb-4">Subscribe to get updates on new products and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-sage-700 text-cream-50 placeholder-sage-300 focus:outline-none"
              />
              <button className="px-6 py-2 bg-cream-50 text-forest-dark rounded-r-lg hover:bg-cream-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-300 text-sm">
            © 2024 SKINCARE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sage-300 hover:text-cream-50 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-sage-300 hover:text-cream-50 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
