import React, { useState } from 'react';
import { 
  Briefcase, 
  Sprout, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Globe2,
  Users2,
  Award
} from 'lucide-react';

const pillarsData = [
  {
    id: 'consultants',
    name: 'USG Consultants',
    tagline: 'HR Consulting, Talent Acquisition & Strategic Career Growth',
    icon: Briefcase,
    accentColor: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-500/50',
    description: 'Connects talented individuals with premier career opportunities across India. We specialize in end-to-end recruitment, HR advisory, resume optimization, and corporate compliance solutions.',
    highlights: [
      'HR Consulting & Pan-India Talent Acquisition',
      'Professional Career Guidance & Resume Optimization',
      'Interview Preparation & Corporate Advisory',
      'Legal & Statutory Compliance Support'
    ],
    badge: 'USC • HR & Career Placement'
  },
  {
    id: 'spices',
    name: 'USG Spices',
    tagline: 'Traditional & Organic Indian Spices Direct From Farmers',
    icon: Sprout,
    accentColor: 'from-emerald-500 to-emerald-600',
    borderColor: 'border-emerald-500/50',
    description: 'Delivering authentic and pure spices directly from pristine farmlands. Sourcing 80% raw spices from local farmers in Kerala (Kochi & Idukki) and Andhra Pradesh Red Chilli.',
    highlights: [
      '80% Direct Farm Sourcing from Kerala (Kochi & Idukki)',
      'Premium Quality Red Chilli Sourced from Andhra Pradesh',
      '100% Organic, Chemical-Free Processing',
      'Bulk Supply Chain & Export Ready Quality'
    ],
    badge: 'USS • Pure Agriculture'
  },
  {
    id: 'enterprises',
    name: 'USG Enterprises',
    tagline: 'Manufacturing, Product Development & Global Trade Operations',
    icon: Building2,
    accentColor: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/50',
    description: 'Manages multi-sector commercial ventures, supply chain networks, product design, and upcoming export-import initiatives targeting US and global markets.',
    highlights: [
      'Commercial Product Development & Manufacturing',
      'Robust Logistics & Supply Chain Management',
      'Upcoming Export-Import Initiatives targeting US & Global Markets',
      'Enterprise Growth & B2B Expansion Services'
    ],
    badge: 'USE • Commercial Ventures'
  },
  {
    id: 'foundation',
    name: 'USG Foundation',
    tagline: 'Social Welfare, Education Support & Community Empowerment',
    icon: HeartHandshake,
    accentColor: 'from-rose-500 to-rose-600',
    borderColor: 'border-rose-500/50',
    description: 'Dedicated non-profit social welfare initiative focused on community upliftment, educational empowerment, healthcare access, and vocational skill development.',
    highlights: [
      'Community Development & Healthcare Initiatives',
      'Education Support & Scholarships for Underprivileged Youth',
      'Vocational Skill Training & Rural Empowerment',
      'Sustainable Social & Environmental Programs'
    ],
    badge: 'USF • Social Welfare'
  }
];

const PillarsDetail = () => {
  const [activePillar, setActivePillar] = useState(pillarsData[0]);

  return (
    <section id="pillars" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-4">
            Our Core Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Four Pillars of <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">Unique Solution Group</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore how Unique Solution Group drives strategic excellence across consulting, agriculture, commerce, and community empowerment.
          </p>
        </div>

        {/* Tab Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {pillarsData.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar.id === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 text-center relative group overflow-hidden ${
                  isActive 
                    ? `bg-slate-900 border-amber-400 text-white shadow-2xl shadow-amber-500/10 scale-[1.02]` 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80 hover:text-slate-200'
                }`}
              >
                {/* Active Highlight Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500"></div>
                )}

                <div className={`p-3 rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'bg-amber-500/15 text-amber-400' : 'bg-slate-800/80 text-slate-400'
                }`}>
                  <Icon size={24} />
                </div>

                <span className="font-bold text-sm sm:text-base tracking-wide">
                  {pillar.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Feature Display Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                <ShieldCheck size={14} />
                {activePillar.badge}
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  {activePillar.name}
                </h3>
                <p className="text-amber-400 font-semibold text-base sm:text-lg">
                  {activePillar.tagline}
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePillar.description}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {activePillar.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Inside Card */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition duration-200 shadow-lg glow-gold"
                >
                  Inquire About {activePillar.name} <ArrowRight size={16} />
                </a>
              </div>

            </div>

            {/* Right Visual Badge Box (4 Cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-4 shadow-xl">
                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  {React.createElement(activePillar.icon, { size: 40 })}
                </div>
                <h4 className="text-lg font-bold text-white">
                  Excellence in Action
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Delivering high-standard operational value, strict quality verification, and transparent delivery across all sector engagements.
                </p>
                <div className="w-full border-t border-slate-800/80 pt-3 flex justify-around text-slate-400 text-xs">
                  <span className="flex items-center gap-1"><Award size={14} className="text-amber-400"/> Trusted</span>
                  <span className="flex items-center gap-1"><Globe2 size={14} className="text-amber-400"/> Scalable</span>
                  <span className="flex items-center gap-1"><Users2 size={14} className="text-amber-400"/> Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PillarsDetail;