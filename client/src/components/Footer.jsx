import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo2.png" 
                alt="Unique Solution Group Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <span className="text-lg font-bold text-white tracking-wide">Unique Solution Group</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              A comprehensive multi-pillar organization dedicated to excellence across business consulting, organic spices, enterprise ventures, and social welfare.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-l-2 border-amber-500 pl-3">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition flex items-center gap-2">
                  <ArrowRight size={14} className="text-amber-500" /> Home
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-amber-400 transition flex items-center gap-2">
                  <ArrowRight size={14} className="text-amber-500" /> Our 4 Pillars
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition flex items-center gap-2">
                  <ArrowRight size={14} className="text-amber-500" /> About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition flex items-center gap-2">
                  <ArrowRight size={14} className="text-amber-500" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our 4 Pillars */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-l-2 border-amber-500 pl-3">Our 4 Pillars</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-amber-400 transition">✨ USG Consultants</li>
              <li className="hover:text-amber-400 transition">🌿 USG Spices</li>
              <li className="hover:text-amber-400 transition">🚀 USG Enterprises</li>
              <li className="hover:text-amber-400 transition">🤝 USG Foundation</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-l-2 border-amber-500 pl-3">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <span>Kochi, Kerala, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+916397859259" className="hover:text-amber-400 transition">+91 6397859259</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info.uniquesolutiongroup@gmail.com" className="hover:text-amber-400 transition text-xs">info.uniquesolutiongroup@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <p className="uppercase tracking-wide">&copy; {new Date().getFullYear()} UNIQUE SOLUTION GROUP. All rights reserved.</p>
          <p className="text-slate-400 font-medium">
            Founder & CEO: <span className="text-amber-400 font-semibold">Hemraj Singh Rajawat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;