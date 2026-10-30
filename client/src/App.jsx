import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PillarsDetail from './components/PillarsDetail';
import ContactForm from './components/ContactForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { ShieldCheck, Award, Users, TrendingUp, Lock } from 'lucide-react';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setIsAdminView(false);
  };

  if (isAdminView) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center max-w-7xl mx-auto">
          <span className="font-bold text-amber-400 flex items-center gap-2">
            <Lock size={16} /> USG Admin Portal
          </span>
          <button 
            onClick={() => setIsAdminView(false)} 
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-1.5 rounded-lg text-sm transition"
          >
            ← Back to Main Site
          </button>
        </div>
        {!isAuthenticated ? (
          <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <AdminDashboard onLogout={handleLogout} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />





{/* Admin Portal & 4 Pillars Automatic Floating Marquee */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 flex justify-between items-center overflow-hidden relative">
        
        {/* Continuous Automatic Moving Ticker */}
        <div className="overflow-hidden w-full mr-4 relative flex">
          <div className="animate-marquee flex space-x-12 text-amber-400/90 font-medium whitespace-nowrap">
            {/* First Set */}
            <span className="inline-flex items-center gap-1.5">✨ USG Consultants: Expert Business & Career Growth</span>
            <span className="inline-flex items-center gap-1.5">🌿 USG Spices: Pure & Premium Traditional Spices</span>
            <span className="inline-flex items-center gap-1.5">🚀 USG Enterprises: Trusted Commercial Solutions</span>
            <span className="inline-flex items-center gap-1.5">🤝 USG Foundation: Dedicated Community Social Welfare</span>
            
            {/* Duplicate Set for Seamless Infinite Loop */}
            <span className="inline-flex items-center gap-1.5">✨ USG Consultants: Expert Business & Career Growth</span>
            <span className="inline-flex items-center gap-1.5">🌿 USG Spices: Pure & Premium Traditional Spices</span>
            <span className="inline-flex items-center gap-1.5">🚀 USG Enterprises: Trusted Commercial Solutions</span>
            <span className="inline-flex items-center gap-1.5">🤝 USG Foundation: Dedicated Community Social Welfare</span>
          </div>
        </div>

        {/* Admin Portal Button */}
        <button 
          onClick={() => setIsAdminView(true)} 
          className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition flex-shrink-0 bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700/60 z-10 shadow-md"
        >
          <Lock size={12} /> Admin Portal
        </button>
      </div>






      {/* Top Notification / Portal Bar
      <div className="bg-slate-900/80 border-b border-slate-800/80 text-right px-6 py-2">
        <button 
          onClick={() => setIsAdminView(true)} 
          className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition"
        >
          <Lock size={12} /> Admin Portal
        </button>
      </div> */}

      {/* Hero Section */}
      <header id="home" className="relative overflow-hidden py-28 sm:py-36 px-4 bg-slate-950">
        
        {/* Glowing Background Gradients & Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-8 shadow-lg shadow-amber-500/5 animate-bounce">
            <Award size={16} /> Excellence Across Business, Quality & Social Impact
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
            Empowering Your Growth With <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
              Unique Solutions
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            Unique Solution Group unifies strategic business consulting, organic spices distribution, enterprise ventures, and social welfare programs under one trusted corporate umbrella.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition duration-200 shadow-xl glow-gold text-base flex items-center justify-center gap-2"
            >
              Get In Touch Now
            </a>
            <a 
              href="#pillars" 
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold px-8 py-4 rounded-xl transition duration-200 text-base shadow-lg"
            >
              Explore Our 4 Pillars
            </a>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10">
          <div className="bg-slate-900/80 border border-slate-800/90 p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition duration-300">
            <ShieldCheck className="mx-auto text-amber-400 mb-2.5" size={26} />
            <p className="text-sm font-bold text-slate-100">100% Trusted Brand</p>
            <p className="text-xs text-slate-400 mt-1">Verified Corporate Entity</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition duration-300">
            <TrendingUp className="mx-auto text-amber-400 mb-2.5" size={26} />
            <p className="text-sm font-bold text-slate-100">Strategic Growth</p>
            <p className="text-xs text-slate-400 mt-1">Pan-India Expansion</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition duration-300">
            <Award className="mx-auto text-amber-400 mb-2.5" size={26} />
            <p className="text-sm font-bold text-slate-100">Premium Quality</p>
            <p className="text-xs text-slate-400 mt-1">Direct Farm Sourcing</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-amber-500/40 transition duration-300">
            <Users className="mx-auto text-amber-400 mb-2.5" size={26} />
            <p className="text-sm font-bold text-slate-100">Community Support</p>
            <p className="text-xs text-slate-400 mt-1">Dedicated Foundation</p>
          </div>
        </div>

      </header>

      {/* Interactive Pillars Detail Section */}
      <PillarsDetail />

    

   {/* About Section */}
   <AboutSection />

   

      {/* Contact Form Section */}
      <ContactForm />

      {/* Professional Footer Component */}
   <Footer />

      {/* Footer */}
      {/* <footer className="bg-slate-950 border-t border-slate-800/80 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Unique Solution Group. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;