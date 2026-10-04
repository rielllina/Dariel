import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { DestinationExplorer } from './components/DestinationExplorer';
import { MapExperience } from './components/MapExperience';
import { TourExperiences } from './components/TourExperiences';
import { ItinerarySection } from './components/ItinerarySection';
import { ResponsibleTourism } from './components/ResponsibleTourism';
import { LocalCrafts } from './components/LocalCrafts';
import { AboutSection } from './components/AboutSection';
import { TravelInquirySection } from './components/TravelInquirySection';
import { ContactAndOffices } from './components/ContactAndOffices';
import { Footer } from './components/Footer';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { TermsModal } from './components/TermsModal';
import { Destination } from './types';
import { Calendar, Compass } from 'lucide-react';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);

  const handleExploreDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanTripClick = () => {
    const el = document.getElementById('inquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewItineraryClick = () => {
    const el = document.getElementById('experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewOnMap = (dest: Destination) => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2022] font-sans antialiased selection:bg-[#0C2340] selection:text-[#FAF8F5]">
      {/* Floating Modern Header */}
      <Navbar
        onPlanTripClick={handlePlanTripClick}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

      <main>
        {/* Hero Section — "The Romblon Story" */}
        <HeroSection
          onExploreClick={handleExploreDestinations}
          onPlanTripClick={handlePlanTripClick}
        />

        {/* Split-Screen Philosophy & Introduction */}
        <IntroductionSection
          onExploreDestinations={handleExploreDestinations}
        />

        {/* Horizontal Scrolling Destination Gallery */}
        <DestinationExplorer
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />

        {/* Interactive Stylized Archipelago Map */}
        <MapExperience
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          selectedDestinationId={selectedDestination?.id}
        />

        {/* Tour Experience Selector (Solo, Couple, Family, Barkada) */}
        <TourExperiences
          onViewItineraryClick={handleViewItineraryClick}
          onPlanTripClick={handlePlanTripClick}
        />

        {/* 3-Day Travel Journey Timeline */}
        <ItinerarySection
          onPlanTripClick={handlePlanTripClick}
        />

        {/* Full-width Nature Responsible Tourism & Core Values */}
        <ResponsibleTourism />

        {/* Editorial Shopping Section ("Made in Romblon") */}
        <LocalCrafts />

        {/* About rombloNatin & Three Pillars */}
        <AboutSection />

        {/* Travel Inquiry Form */}
        <TravelInquirySection />

        {/* Contact, Offices & Communications */}
        <ContactAndOffices />
      </main>

      {/* Artistic Footer */}
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />

      {/* Floating Quick Action CTA for Plan Your Trip */}
      <div className="fixed bottom-6 right-6 z-30 hidden sm:block">
        <button
          onClick={handlePlanTripClick}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0C2340] hover:bg-[#13335C] text-white shadow-2xl border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold uppercase tracking-wider group"
        >
          <Calendar className="w-4 h-4 text-[#E2B17A] group-hover:scale-110 transition-transform" />
          <span>Plan Your Trip</span>
        </button>
      </div>

      {/* Destination Detailed Information Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onViewOnMap={handleViewOnMap}
      />

      {/* Terms and Conditions Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
