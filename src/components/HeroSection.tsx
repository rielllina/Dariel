import React from 'react';
import { Compass, Calendar, ArrowDown, MapPin, Sparkles, Shield, Heart } from 'lucide-react';
import { ROMBLON_ASSETS } from '../data/romblonData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlanTripClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onPlanTripClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#050D18] text-white pt-24 pb-16"
    >
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ROMBLON_ASSETS.sandbar}
          alt="Cinematic landscape of Bonbon Beach sandbar, Romblon"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients & Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050D18] via-[#050D18]/50 to-[#050D18]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D18]/85 via-transparent to-[#050D18]/40" />
      </div>

      {/* Floating Badges */}
      <div className="absolute top-28 right-6 lg:right-16 hidden md:flex flex-col gap-3 z-20 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wider uppercase text-stone-200 shadow-lg flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Responsible Tourism</span>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wider uppercase text-stone-200 shadow-lg flex items-center gap-2 ml-4">
          <Compass className="w-3.5 h-3.5 text-[#E2B17A]" />
          <span>Island Experiences</span>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wider uppercase text-stone-200 shadow-lg flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-rose-400" />
          <span>Local Communities</span>
        </div>
      </div>

      {/* Editorial Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between h-full pt-8 pb-12">
        <div className="max-w-3xl">
          {/* Small Top Text */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#E2B17A] mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
            <span>PHILIPPINES • ROMBLON</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.05] mb-6">
            Romblon,<br />
            <span className="italic text-[#E2B17A] font-normal">Yours to Discover.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl font-light leading-relaxed mb-10 text-balance">
            Explore islands, culture, heritage, local craftsmanship, and unforgettable experiences with <strong className="font-semibold text-white">rombloNatin</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-all shadow-xl hover:shadow-[#E2B17A]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Compass className="w-4 h-4" />
              <span>EXPLORE ROMBLON</span>
            </button>

            <button
              onClick={onPlanTripClick}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#E2B17A]" />
              <span>PLAN YOUR TRIP</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Stats & Scroll Indicator */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8 sm:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">09</div>
              <div className="text-[11px] uppercase tracking-widest text-[#E2B17A]">Key Destinations</div>
            </div>
            <div className="w-[1px] h-8 bg-white/15" />
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">04</div>
              <div className="text-[11px] uppercase tracking-widest text-[#E2B17A]">Travel Packages</div>
            </div>
            <div className="w-[1px] h-8 bg-white/15" />
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">100%</div>
              <div className="text-[11px] uppercase tracking-widest text-[#E2B17A]">Responsible & Local</div>
            </div>
          </div>

          {/* Vertical Scroll Indicator */}
          <a
            href="#intro"
            aria-label="Scroll to introduction"
            className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 group-hover:text-[#E2B17A]">
              Scroll to explore
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E2B17A]">
              <ArrowDown className="w-3.5 h-3.5 text-[#E2B17A] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
