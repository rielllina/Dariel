import React from 'react';
import { ArrowUpRight, MapPin, Heart, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../data/romblonData';

interface FooterProps {
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-[#050D18] text-stone-400 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Artistic Top Brand Statement */}
        <div className="pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <a
                href="#home"
                className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white hover:text-[#E2B17A] transition-colors inline-block"
              >
                romblo<span className="font-sans text-[#E2B17A] italic font-extrabold">Natin</span>
              </a>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-300 max-w-xl font-light leading-snug">
                “Romblon mo, Romblon niya,<br />
                <span className="text-[#E2B17A]">Romblon nating lahat.”</span>
              </p>
            </div>

            <div className="text-xs text-stone-400 space-y-2 max-w-xs">
              <div className="flex items-center gap-2 text-stone-200">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>Romblon, MIMAROPA, Philippines</span>
              </div>
              <p className="leading-relaxed">
                Dedicated to sustainable island discovery, community empowerment, and environmental preservation.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[#E2B17A] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#intro" className="hover:text-white transition-colors">The Philosophy</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-white transition-colors">3-Day Itinerary</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">Tour Formats</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[#E2B17A] mb-4">
              Culture & Heritage
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#crafts" className="hover:text-white transition-colors">Marble Jewelry</a>
              </li>
              <li>
                <a href="#crafts" className="hover:text-white transition-colors">Marble Living Decor</a>
              </li>
              <li>
                <a href="#crafts" className="hover:text-white transition-colors">Handwoven Products</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">St. Joseph Cathedral</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">Fort San Andres</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[#E2B17A] mb-4">
              Offices & Direct
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <strong className="text-stone-300 block">Main:</strong> {CONTACT_INFO.mainOffice}
              </li>
              <li>
                <strong className="text-stone-300 block">Satellite:</strong> {CONTACT_INFO.satelliteOffice}
              </li>
              <li>
                <strong className="text-stone-300 block">Tel:</strong> {CONTACT_INFO.telephone}
              </li>
              <li>
                <strong className="text-stone-300 block">Email:</strong> {CONTACT_INFO.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[#E2B17A] mb-4">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white text-left transition-colors cursor-pointer text-xs"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white text-left transition-colors cursor-pointer text-xs"
                >
                  Payment & Refund Rules
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white text-left transition-colors cursor-pointer text-xs"
                >
                  Guest Environmental Code
                </button>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#10B981] hover:text-white transition-colors pt-2"
                >
                  <span>Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© 2026 rombloNatin. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Built for the EntrepMind Romblon Tourism Promotion Campaign</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
