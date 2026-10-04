import React from 'react';
import { Compass, Users, Shield, Target, Eye, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/romblonData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      word: 'DISCOVER',
      tagline: "Explore Romblon's natural beauty.",
      description: 'Uncover kilometer-long white sandbars, turquoise sea caves, mountain-fed rivers, and world-class macro marine realms.',
      icon: Compass,
      accentColor: '#E2B17A',
    },
    {
      word: 'CONNECT',
      tagline: 'Experience local culture and communities.',
      description: 'Engage with generational marble carvers, rural weavers, local boatmen, and warm coastal neighborhoods.',
      icon: Users,
      accentColor: '#38BDF8',
    },
    {
      word: 'PROTECT',
      tagline: 'Support responsible and sustainable tourism.',
      description: 'Promote Leave No Trace, finance community marine sanctuaries, and safeguard Romblon for generations to come.',
      icon: Shield,
      accentColor: '#10B981',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>ORGANIZATION IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0C2340] tracking-tight">
            Why rombloNatin?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5156] font-light">
            Founded on the belief that tourism should uplift communities and honor the natural soul of Romblon.
          </p>
        </div>

        {/* Three Large Visual Concepts (DISCOVER, CONNECT, PROTECT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.word}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      style={{ color: pillar.accentColor }}
                      className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-stone-100"
                    >
                      PILLAR
                    </span>
                    <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0C2340]" />
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C2340] tracking-tight mb-2">
                    {pillar.word}
                  </h3>

                  <p className="text-base font-serif italic text-[#C69255] mb-4">
                    “{pillar.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-[#4B5156] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 text-[11px] font-mono text-stone-400">
                  rombloNatin Core Triad
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision and Mission Split Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C2340] text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/10 text-[#E2B17A]">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E2B17A]">
                OUR MISSION
              </span>
            </div>
            <p className="text-base sm:text-lg font-serif leading-relaxed text-stone-200">
              “{CONTACT_INFO.mission}”
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#122C21] text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/10 text-[#10B981]">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
                OUR VISION
              </span>
            </div>
            <p className="text-base sm:text-lg font-serif leading-relaxed text-stone-200">
              “{CONTACT_INFO.vision}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
