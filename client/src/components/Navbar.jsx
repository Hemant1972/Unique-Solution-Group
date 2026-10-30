import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/80 text-white sticky top-0 z-50 transition-all shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo Only (Bada Size & Clean Look) */}
          <a href="#home" className="flex items-center group py-2">
            <img 
              src="/logo2.png" 
              alt="Unique Solution Group Logo" 
              className="h-14 sm:h-16 w-auto object-contain transition-all duration-300 transform group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-semibold text-slate-300">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#pillars" className="hover:text-amber-400 transition-colors">Our Pillars</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex space-x-3 items-center">
            <a 
              href="https://wa.me/916397859259?text=Hello%20Unique%20Solution%20Group,%20I%20have%20an%20inquiry." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-emerald-600/90 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition duration-200 shadow-lg hover:shadow-emerald-900/40"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a 
              href="tel:+916397859259" 
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition duration-200 shadow-lg glow-gold"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;