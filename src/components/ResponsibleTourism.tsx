import React from 'react';
import { Leaf, Users, Award, Compass, Heart, Sparkles, Shield } from 'lucide-react';
import { CORE_VALUES, ROMBLON_ASSETS } from '../data/romblonData';

export const ResponsibleTourism: React.FC = () => {
  const getCoreValueIcon = (name: string) => {
    switch (name) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#10B981]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#38BDF8]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#E2B17A]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#34D399]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#FBBF24]" />;
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#050D18] text-white overflow-hidden">
      {/* Full-width Nature Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={ROMBLON_ASSETS.guitingMountain}
          alt="Untouched biodiversity forest of Sibuyan Island and Mount Guiting-Guiting"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay */}
        <div className="absolute inset-0 bg-[#050D18]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D18] via-transparent to-[#050D18]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Statement Typography */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-4">
            <Shield className="w-4 h-4" />
            <span>RESPONSIBLE TOURISM CODE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
            “Leave a place<br />
            <span className="italic text-[#E2B17A] font-normal">better than you found it.”</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Tourism in Romblon is not about conquering islands—it is about honoring communities, protecting fragile marine sanctuaries, and leaving no trace on sandy shores.
          </p>
        </div>

        {/* Six Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_VALUES.map((val) => (
            <div
              key={val.number}
              className="p-8 rounded-3xl bg-[#08182B]/80 backdrop-blur-md border border-white/10 hover:border-[#10B981]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-[#E2B17A]">
                    {val.number}
                  </span>
                  <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getCoreValueIcon(val.iconName)}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#E2B17A] transition-colors">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                <span className="text-[#10B981]">●</span>
                <span>rombloNatin Core Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
