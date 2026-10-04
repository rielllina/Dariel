import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { ROMBLON_ASSETS } from '../data/romblonData';

interface IntroductionSectionProps {
  onExploreDestinations: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  onExploreDestinations,
}) => {
  return (
    <section id="intro" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Large Editorial Typography */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] block mb-4">
              THE PHILOSOPHY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#0C2340] leading-[1.08] tracking-tight text-balance">
              More than<br />
              <span className="italic font-normal text-[#C69255]">a trip.</span>
            </h2>
          </div>

          {/* Right Column: Business Plan Description */}
          <div className="lg:col-span-6 space-y-6 pt-2 lg:pt-6">
            <p className="text-lg sm:text-xl text-[#2D3134] font-light leading-relaxed">
              <strong className="font-semibold text-[#0C2340]">rombloNatin</strong> promotes Romblon through responsible tourism by highlighting its beaches, islands, marine resources, cultural heritage, local products, and communities.
            </p>

            <p className="text-sm sm:text-base text-[#4B5156] leading-relaxed">
              We believe travel should enrich both the voyager and the visited. By weaving together breathtaking island itineraries, generational marble artistry, and deep respect for the Sibuyan Sea's biodiversity, rombloNatin crafts journeys that protect what makes Romblon unforgettable.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreDestinations}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C2340] hover:text-[#C69255] transition-colors group cursor-pointer"
              >
                <span>Discover Places Worth Remembering</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetrical Image Collage */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
          {/* Collage Item 1: Main Large Image */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl bg-[#08182B] group h-80 sm:h-[420px]">
            <img
              src={ROMBLON_ASSETS.coastalCave}
              alt="Coastal Caves and Waters of Romblon"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] uppercase tracking-wider text-[#E2B17A] font-semibold">
                Natural Sanctuaries
              </span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">
                Turquoise caverns & untouched marine flora
              </h3>
            </div>
          </div>

          {/* Collage Item 2 & 3: Overlapping Stack */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Collage Item 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#08182B] group h-56 sm:h-64">
              <img
                src={ROMBLON_ASSETS.marbleArtisan}
                alt="Romblon Marble Master Artisan at Work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#E2B17A] font-semibold">
                  Generational Heritage
                </span>
                <h4 className="text-base font-serif font-bold text-white">
                  Centuries of Italian-grade stone carving
                </h4>
              </div>
            </div>

            {/* Collage Item 3: Floating Accent Card */}
            <div className="p-6 rounded-2xl bg-[#0C2340] text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-widest text-[#E2B17A] uppercase">
                  rombloNatin Promise
                </span>
                <Sparkles className="w-4 h-4 text-[#10B981]" />
              </div>
              <p className="text-sm font-serif italic text-stone-200">
                “Every journey is an investment in island families, clean waters, and living traditions.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
