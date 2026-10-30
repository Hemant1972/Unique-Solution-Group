import React from 'react';
import { Target, Eye, ShieldCheck, Layers, Users, Building2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            About <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Unique Solution Group</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Unique Solution Group is a multi-disciplinary corporate organization dedicated to delivering top-tier solutions across business consulting, organic agricultural distribution, commercial ventures, and community welfare.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Our Vision */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition duration-300">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To be a globally recognized conglomerate known for integrity, quality, and sustainable innovation across consulting, agriculture, commerce, and social empowerment.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition duration-300">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Empowering clients, partners, and local communities through strategic growth frameworks, ethical sourcing of pure spices, dependable enterprise services, and impactful social initiatives.
            </p>
          </div>
        </div>

        {/* Corporate Highlights Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 text-center">
            <Building2 className="mx-auto text-amber-400 mb-3" size={28} />
            <h4 className="text-xl font-bold text-white mb-1">4 Core</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">Business Pillars</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 text-center">
            <ShieldCheck className="mx-auto text-amber-400 mb-3" size={28} />
            <h4 className="text-xl font-bold text-white mb-1">100% Quality</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">Verified Compliance</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 text-center">
            <Layers className="mx-auto text-amber-400 mb-3" size={28} />
            <h4 className="text-xl font-bold text-white mb-1">Multi-Domain</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">Expert Advisory</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-6 text-center">
            <Users className="mx-auto text-amber-400 mb-3" size={28} />
            <h4 className="text-xl font-bold text-white mb-1">Community</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">Welfare Focus</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;