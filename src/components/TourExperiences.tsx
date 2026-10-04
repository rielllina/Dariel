import React, { useState } from 'react';
import { User, Users, Heart, Sparkles, Check, ArrowRight, Compass, MapPin } from 'lucide-react';
import { TOUR_EXPERIENCES } from '../data/romblonData';
import { TourPackageExperience } from '../types';

interface TourExperiencesProps {
  onViewItineraryClick: () => void;
  onPlanTripClick: () => void;
}

export const TourExperiences: React.FC<TourExperiencesProps> = ({
  onViewItineraryClick,
  onPlanTripClick,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<TourPackageExperience>(TOUR_EXPERIENCES[0]);

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'solo':
        return <User className="w-5 h-5" />;
      case 'couple':
        return <Heart className="w-5 h-5" />;
      case 'family':
        return <Users className="w-5 h-5" />;
      case 'barkada':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
            <Compass className="w-4 h-4" />
            <span>CURATED TRAVEL FORMATS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0C2340] tracking-tight text-balance">
            Choose Your Way to Experience Romblon
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5156] font-light">
            Every traveler experiences the islands differently. Select your journey style to discover custom-curated pacing, destinations, and activities.
          </p>
        </div>

        {/* Four Large Selectable Experience Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {TOUR_EXPERIENCES.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`p-6 sm:p-8 rounded-3xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0C2340] text-white border-[#0C2340] shadow-2xl scale-[1.02]'
                    : 'bg-white text-[#1E2022] border-stone-200 hover:border-[#0C2340]/40 hover:bg-stone-50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#E2B17A] text-[#0C2340]' : 'bg-stone-100 text-[#4B5156]'
                      }`}
                    >
                      {pkg.number}
                    </span>
                    <div
                      className={`p-2 rounded-full ${
                        isSelected ? 'bg-white/10 text-[#E2B17A]' : 'bg-stone-100 text-[#2D6A4F]'
                      }`}
                    >
                      {getPackageIcon(pkg.id)}
                    </div>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-serif font-bold tracking-tight ${
                      isSelected ? 'text-white' : 'text-[#0C2340]'
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm italic mt-1 font-serif ${
                      isSelected ? 'text-[#E2B17A]' : 'text-[#C69255]'
                    }`}
                  >
                    “{pkg.tagline}”
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span>{isSelected ? 'Active Selection' : 'Select'}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? 'bg-[#10B981]' : 'bg-stone-300'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Content Panel */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-12 transition-all">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Overview & Target Travelers */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2B17A]/20 text-[#0C2340] border border-[#E2B17A]/40">
                  EXPERIENCE {selectedPackage.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#2D6A4F] font-bold">
                  {selectedPackage.vibe}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0C2340]">
                {selectedPackage.title} Experience
              </h3>

              <p className="text-base text-[#2D3134] leading-relaxed">
                {selectedPackage.description}
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C2340] block mb-1">
                  Ideal For:
                </span>
                <p className="text-xs sm:text-sm text-[#4B5156] leading-relaxed">
                  {selectedPackage.targetTravelers}
                </p>
              </div>

              {/* Destinations Tags */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C2340] block mb-2">
                  Featured Destination Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPackage.featuredDestinations.map((dest, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-[#1E2022] flex items-center gap-1.5"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      <span>{dest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Activities Checklist & CTAs */}
            <div className="lg:col-span-6 space-y-6 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0C2340]">
                Main Package Highlights:
              </h4>

              <div className="space-y-3">
                {selectedPackage.mainActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-[#1E2022]"
                  >
                    <div className="p-1 rounded-full bg-[#10B981]/10 text-[#10B981] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onViewItineraryClick}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#0C2340] hover:bg-[#13335C] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>View 3-Day Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2B17A]" />
                </button>

                <button
                  onClick={onPlanTripClick}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire for {selectedPackage.title}</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center italic">
                * Note: rombloNatin customizes each package to guest pacing and seasonal weather advisories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
