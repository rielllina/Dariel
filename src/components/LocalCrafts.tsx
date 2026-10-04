import React, { useState } from 'react';
import { Hammer, Sparkles, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { LOCAL_CRAFTS } from '../data/romblonData';
import { LocalCraftItem } from '../types';

export const LocalCrafts: React.FC = () => {
  const [selectedCraft, setSelectedCraft] = useState<LocalCraftItem | null>(null);

  return (
    <section id="crafts" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
              <Hammer className="w-4 h-4" />
              <span>ISLAND ARTISANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0C2340] tracking-tight">
              Made in Romblon
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4B5156] font-light max-w-xl">
              Authentic handcrafted treasures sculpted from native marble veins and woven with sustainable indigenous fibers.
            </p>
          </div>

          <button
            onClick={() => setSelectedCraft(LOCAL_CRAFTS[0])}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#0C2340] hover:bg-[#13335C] transition-colors self-start md:self-auto cursor-pointer shadow-md"
          >
            <span>Discover Local Craftsmanship</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E2B17A]" />
          </button>
        </div>

        {/* Editorial Shopping Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCAL_CRAFTS.map((craft) => (
            <div
              key={craft.number}
              onClick={() => setSelectedCraft(craft)}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Product Photograph with Zoom */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-100">
                <img
                  src={craft.image}
                  alt={craft.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Craft Number Accent */}
                <div className="absolute top-4 left-4 font-mono text-2xl font-extrabold text-[#E2B17A] px-2 py-0.5 rounded bg-black/40 backdrop-blur-md">
                  {craft.number}
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#E2B17A] font-semibold block">
                    {craft.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                    {craft.title}
                  </h3>
                </div>
              </div>

              {/* Craft Details */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <p className="text-xs sm:text-sm text-[#4B5156] leading-relaxed line-clamp-3">
                  {craft.description}
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 truncate max-w-[200px]">
                    Material: <strong className="text-[#0C2340] font-semibold">{craft.material}</strong>
                  </span>
                  <span className="text-xs font-bold text-[#2D6A4F] group-hover:text-[#0C2340] flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Craft Details Modal */}
      {selectedCraft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedCraft(null)}
          />
          <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#1E2022] border border-stone-300">
            <div className="relative h-60 w-full bg-[#0C2340]">
              <img
                src={selectedCraft.image}
                alt={selectedCraft.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedCraft(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-mono font-bold text-[#E2B17A]">
                  ITEM {selectedCraft.number} • {selectedCraft.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
                  {selectedCraft.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm text-[#2D3134]">
              <p className="leading-relaxed">{selectedCraft.description}</p>

              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C2340] block mb-1">
                  Artisan Heritage & Craft Story:
                </span>
                <p className="text-xs text-[#4B5156] leading-relaxed">
                  {selectedCraft.artisanStory}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2D6A4F] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>rombloNatin supports fair-trade compensation directly to local family craft workshops.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
