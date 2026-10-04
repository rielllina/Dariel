import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/romblonData';
import { Destination } from '../types';

interface MapExperienceProps {
  onSelectDestination: (dest: Destination) => void;
  selectedDestinationId?: string | null;
}

export const MapExperience: React.FC<MapExperienceProps> = ({
  onSelectDestination,
  selectedDestinationId,
}) => {
  const [activePin, setActivePin] = useState<Destination>(DESTINATIONS[0]);

  return (
    <section id="map" className="py-24 sm:py-32 bg-[#08182B] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E2B17A] mb-3">
            <Navigation className="w-4 h-4 text-[#10B981]" />
            <span>ARCHIPELAGO PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            Follow the Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300 font-light">
            Interactive stylized map of Romblon’s three major islands and outlying coastal sanctuaries. Click any marker to view highlights.
          </p>
        </div>

        {/* Map Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Stylized Illustrated Map (SVG Canvas) */}
          <div className="lg:col-span-8 relative bg-gradient-to-br from-[#0C2340] via-[#091C33] to-[#050D18] rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl min-h-[480px] flex items-center justify-center overflow-hidden">
            {/* Nautical Depth Lines & Radial Glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

            <svg
              viewBox="0 0 100 100"
              className="w-full h-full max-h-[520px] select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Depth Contours */}
              <circle cx="50" cy="50" r="44" fill="none" stroke="#2dd4bf" strokeWidth="0.2" strokeDasharray="1 3" opacity="0.3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#2dd4bf" strokeWidth="0.2" strokeDasharray="2 4" opacity="0.4" />

              {/* Water Labels */}
              <text x="50" y="24" fill="#38bdf8" fontSize="2.2" opacity="0.4" fontStyle="italic" textAnchor="middle" letterSpacing="0.2em">
                SIBUYAN SEA
              </text>
              <text x="20" y="28" fill="#38bdf8" fontSize="1.8" opacity="0.3" fontStyle="italic" textAnchor="middle" letterSpacing="0.2em">
                TABLAS STRAIT
              </text>

              {/* 1. Tablas Island (West - Largest Island) */}
              <g className="transition-opacity hover:opacity-90">
                <path
                  d="M 28 32 C 34 33, 35 45, 34 58 C 33 68, 27 75, 23 72 C 21 68, 24 55, 25 45 C 25 38, 26 34, 28 32 Z"
                  fill="#1B4332"
                  stroke="#2D6A4F"
                  strokeWidth="0.8"
                />
                <text x="28" y="48" fill="#FAF8F5" fontSize="2.8" fontWeight="bold" textAnchor="middle">
                  TABLAS
                </text>
                <text x="28" y="51" fill="#D4A373" fontSize="1.6" textAnchor="middle">
                  Odiongan • Looc • Ferrol
                </text>
              </g>

              {/* 2. Romblon Island (Center) + Cobrador */}
              <g className="transition-opacity hover:opacity-90">
                {/* Cobrador Island */}
                <ellipse cx="58" cy="38" rx="2.5" ry="1.8" fill="#1B4332" stroke="#2D6A4F" strokeWidth="0.6" />
                <text x="64" y="38" fill="#FAF8F5" fontSize="1.8">Cobrador</text>

                {/* Romblon Main Island */}
                <path
                  d="M 52 44 C 57 43, 61 47, 58 53 C 55 58, 51 56, 50 51 C 49 47, 50 45, 52 44 Z"
                  fill="#1B4332"
                  stroke="#2D6A4F"
                  strokeWidth="0.8"
                />
                <text x="55" y="52" fill="#FAF8F5" fontSize="2.5" fontWeight="bold" textAnchor="middle">
                  ROMBLON
                </text>
                <text x="55" y="55" fill="#D4A373" fontSize="1.6" textAnchor="middle">
                  Marble Capital
                </text>
              </g>

              {/* 3. Sibuyan Island (East - Mount Guiting-Guiting) */}
              <g className="transition-opacity hover:opacity-90">
                <path
                  d="M 70 48 C 78 45, 84 52, 82 60 C 80 66, 74 67, 68 62 C 65 57, 67 50, 70 48 Z"
                  fill="#122C21"
                  stroke="#2D6A4F"
                  strokeWidth="0.8"
                />
                {/* Mountain Sawtooth Ridge */}
                <polygon points="73,53 76,57 71,57" fill="#10B981" />
                <polygon points="76,51 79,57 74,57" fill="#34D399" />
                <text x="75" y="62" fill="#FAF8F5" fontSize="2.8" fontWeight="bold" textAnchor="middle">
                  SIBUYAN
                </text>
                <text x="75" y="65" fill="#D4A373" fontSize="1.6" textAnchor="middle">
                  Mt. Guiting-Guiting
                </text>
              </g>

              {/* 4. Carabao Island (South) */}
              <g className="transition-opacity hover:opacity-90">
                <ellipse cx="25" cy="82" rx="3.2" ry="2.2" fill="#1B4332" stroke="#2D6A4F" strokeWidth="0.6" />
                <text x="25" y="87" fill="#FAF8F5" fontSize="2" fontWeight="bold" textAnchor="middle">
                  CARABAO
                </text>
              </g>

              {/* Animated Travel Route Lines connecting 3-Day Journey */}
              <path
                d="M 28 45 Q 26 55, 26 68 Q 50 65, 75 58 Q 65 48, 55 48"
                fill="none"
                stroke="#E2B17A"
                strokeWidth="0.4"
                strokeDasharray="1.5 2"
                opacity="0.6"
              />
            </svg>

            {/* Interactive Pins Overlay */}
            {DESTINATIONS.map((dest) => {
              const isSelected = activePin?.id === dest.id || selectedDestinationId === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setActivePin(dest)}
                  style={{
                    left: `${dest.mapCoords.x}%`,
                    top: `${dest.mapCoords.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-all duration-300 z-20 cursor-pointer ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                  aria-label={`Select ${dest.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-[#E2B17A]/40 animate-ping" />
                    )}
                    <div
                      className={`p-2 rounded-full shadow-xl transition-all flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#E2B17A] text-[#0C2340] ring-2 ring-white'
                          : 'bg-[#0C2340] text-[#E2B17A] border border-[#E2B17A]/70 hover:bg-[#E2B17A] hover:text-[#0C2340]'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Marker Tiny Tag */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-5 px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap pointer-events-none transition-all ${
                      isSelected
                        ? 'bg-[#E2B17A] text-[#0C2340] shadow-md'
                        : 'bg-[#0C2340]/90 text-stone-300 border border-white/10'
                    }`}
                  >
                    {dest.number} {dest.name}
                  </span>
                </button>
              );
            })}

            {/* Compass Indicator */}
            <div className="absolute top-6 right-6 flex flex-col items-center pointer-events-none">
              <Compass className="w-7 h-7 text-[#E2B17A]" />
              <span className="text-[10px] font-mono mt-0.5 font-bold text-[#E2B17A]">N</span>
            </div>

            {/* Scale Bar */}
            <div className="absolute bottom-6 left-6 text-stone-400 text-[10px] font-mono flex items-center gap-2 bg-[#0C2340]/80 px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-6 h-1 bg-[#E2B17A] rounded" />
              <span>STYLIZED ARCHIPELAGO MAP</span>
            </div>
          </div>

          {/* Marker Detail Card */}
          <div className="lg:col-span-4 bg-[#FAF8F5] text-[#1E2022] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-stone-200">
            <div>
              <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-[#0C2340] mb-5">
                <img
                  src={activePin.image}
                  alt={activePin.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 font-mono text-sm font-bold px-2 py-0.5 rounded bg-[#E2B17A] text-[#0C2340]">
                  {activePin.number}
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase text-[#E2B17A] tracking-wider">
                    {activePin.island}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {activePin.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-[#4B5156] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                  <span>{activePin.location}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#2D3134] leading-relaxed">
                  {activePin.shortDescription}
                </p>

                <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-xs">
                  <strong className="text-[#0C2340] block mb-1">Highlight:</strong>
                  <span className="text-[#4B5156] italic">“{activePin.highlight}”</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200">
              <button
                onClick={() => onSelectDestination(activePin)}
                className="w-full py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#0C2340] hover:bg-[#13335C] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore Destination</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2B17A]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
