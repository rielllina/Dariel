import React from 'react';
import { X, MapPin, Calendar, Compass, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { Destination } from '../types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onViewOnMap: (dest: Destination) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onViewOnMap,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050D18]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl text-[#1E2022] z-10 my-8 max-h-[90vh] flex flex-col border border-stone-300">
        {/* Top Hero Image Banner */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-[#0C2340]">
          <img
            src={destination.image}
            alt={destination.altText || destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all active:scale-95 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Number & Destination Title Lockup */}
          <div className="absolute bottom-5 left-5 right-5 sm:left-8 sm:right-8 text-white">
            <div className="flex items-center gap-3 mb-1.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E2B17A] text-[#0C2340]">
                {destination.number}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E2B17A] font-semibold">
                {destination.category} · {destination.island}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 italic mt-1 font-serif">
              “{destination.highlight}”
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Location & Quick Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4B5156]">
              <MapPin className="w-4 h-4 text-[#2D6A4F] shrink-0" />
              <span>{destination.location}</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onViewOnMap(destination);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0C2340] hover:bg-[#13335C] rounded-full transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#E2B17A]" />
              <span>Locate on Journey Map</span>
            </button>
          </div>

          {/* Overview Prose */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C2340]">
              About This Destination
            </h3>
            <p className="text-sm sm:text-base text-[#2D3134] leading-relaxed">
              {destination.fullDescription}
            </p>
          </div>

          {/* Signature Activities Checklist */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C2340] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Featured Activities</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {destination.activities.map((act, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-[#1E2022]"
                >
                  <span className="text-[#2D6A4F] font-bold tabular-nums">→</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best Time & Travel Tips */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-1.5">
                <Calendar className="w-4 h-4 text-[#2D6A4F]" />
                <span>Best Time to Visit</span>
              </div>
              <p className="text-xs text-[#4B5156] leading-relaxed">
                {destination.bestTime}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-1.5">
                <AlertCircle className="w-4 h-4 text-[#C69255]" />
                <span>Responsible Visitor Tips</span>
              </div>
              <ul className="space-y-1 text-xs text-[#4B5156]">
                {destination.travelTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C69255] font-bold">·</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
