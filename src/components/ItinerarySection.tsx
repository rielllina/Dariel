import React from 'react';
import { Calendar, Compass, Clock, MapPin, CheckCircle2, Utensils, Bed } from 'lucide-react';
import { ITINERARY_DAYS } from '../data/romblonData';

interface ItinerarySectionProps {
  onPlanTripClick: () => void;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ onPlanTripClick }) => {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#0C2340] text-white overflow-hidden border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E2B17A] mb-3">
            <Compass className="w-4 h-4 text-[#10B981]" />
            <span>SIGNATURE 3-DAY EXPEDITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            The Romblon Travel Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300 font-light">
            A seamless three-day island odyssey crafted by rombloNatin, taking you from Tablas coastal bays to the mountain rivers of Sibuyan and the marble fortresses of Romblon Town.
          </p>
        </div>

        {/* Vertical Travel Timeline */}
        <div className="relative border-l-2 border-[#E2B17A]/40 ml-4 sm:ml-10 space-y-16">
          {ITINERARY_DAYS.map((dayItem) => (
            <div key={dayItem.day} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#0C2340] border-4 border-[#E2B17A] group-hover:scale-125 transition-transform" />

              {/* Day Header Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-[#E2B17A] text-[#0C2340]">
                  {dayItem.day}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {dayItem.islandFocus}
                </span>
              </div>

              {/* Day Content Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#08182B] border border-white/15 shadow-xl hover:border-[#E2B17A]/50 transition-all">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  {dayItem.title}
                </h3>
                <p className="text-sm text-stone-300 font-light mb-6">
                  {dayItem.subtitle}
                </p>

                {/* Vertical Route Activity Sequence */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E2B17A] mb-3">
                    Scheduled Route Sequence:
                  </div>
                  {dayItem.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-stone-200"
                    >
                      <span className="font-mono text-[#E2B17A] font-bold text-xs tabular-nums mt-0.5">
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span className="leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>

                {/* Meals & Stay Inclusions Banner */}
                <div className="pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-3 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#E2B17A] shrink-0" />
                    <span>{dayItem.mealNote}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{dayItem.stayNote}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#122C21] to-[#08182B] border border-[#10B981]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Ready to experience this 3-day adventure?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Connect with our local coordinators to customize your dates, group size, and pickup point.
            </p>
          </div>
          <button
            onClick={onPlanTripClick}
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-colors whitespace-nowrap shadow-lg cursor-pointer"
          >
            Inquire for This Itinerary
          </button>
        </div>
      </div>
    </section>
  );
};
