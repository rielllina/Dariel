import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/romblonData';
import { Destination } from '../types';

interface DestinationExplorerProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  onSelectDestination,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
              <Compass className="w-4 h-4" />
              <span>ISLAND HORIZONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0C2340] tracking-tight">
              Places Worth Remembering
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4B5156] max-w-xl font-light">
              From white sandbars and mountain-fed rivers to coastal caves and centuries-old stone churches.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Scroll destinations left"
              className="w-12 h-12 rounded-full border border-stone-300 hover:border-[#0C2340] bg-white hover:bg-[#0C2340] text-[#0C2340] hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll destinations right"
              className="w-12 h-12 rounded-full border border-stone-300 hover:border-[#0C2340] bg-white hover:bg-[#0C2340] text-[#0C2340] hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Destination Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group relative flex-none w-[300px] sm:w-[360px] md:w-[400px] snap-start rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#0C2340] text-white cursor-pointer select-none"
          >
            {/* Large Destination Photograph with Zoom Effect */}
            <div className="relative h-[480px] sm:h-[520px] w-full overflow-hidden bg-[#08182B]">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/40 to-transparent" />

              {/* Destination Number (Large Editorial Accent) */}
              <div className="absolute top-6 left-6 font-mono text-3xl sm:text-4xl font-extrabold text-[#E2B17A] drop-shadow-md">
                {dest.number}
              </div>

              {/* Island Tag */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-stone-200">
                {dest.island}
              </div>

              {/* Bottom Editorial Card Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-widest text-[#E2B17A] font-semibold mb-1">
                  {dest.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                  {dest.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mt-2 leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                  {dest.shortDescription}
                </p>

                {/* Animated "Discover →" link */}
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#E2B17A]">
                  <span>Discover</span>
                  <div className="flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="text-center sm:hidden mt-2 text-xs text-[#4B5156] flex items-center justify-center gap-2">
        <span>← Swipe to explore 9 destinations →</span>
      </div>
    </section>
  );
};
