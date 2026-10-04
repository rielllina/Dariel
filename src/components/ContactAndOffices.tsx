import React from 'react';
import { Mail, Phone, ExternalLink, MapPin, Building, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/romblonData';

export const ContactAndOffices: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
            <MapPin className="w-4 h-4" />
            <span>DIRECT CONNECTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C2340] tracking-tight">
            Offices & Communications
          </h2>
          <p className="mt-3 text-base text-[#4B5156] font-light">
            Our teams in Quezon City and Tablas Island are dedicated to smooth coordination, safety advisories, and authentic island experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main Office */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-[#0C2340] mb-4">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F]">
                Main Headquarters
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0C2340] mt-1">
                {CONTACT_INFO.mainOffice}
              </h3>
              <p className="text-xs text-[#4B5156] mt-2 leading-relaxed">
                Central administrative, commercial planning, and partner relations center.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              Novaliches Hub
            </div>
          </div>

          {/* Satellite Office */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-[#0C2340] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E2B17A]">
                Provincial Operations
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0C2340] mt-1">
                {CONTACT_INFO.satelliteOffice}
              </h3>
              <p className="text-xs text-[#4B5156] mt-2 leading-relaxed">
                Local on-ground tour coordination, boat dispatch, and island guide briefing.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              Tablas Island Center
            </div>
          </div>

          {/* Telephone & Voice */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-[#0C2340] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C2340]">
                Direct Line
              </span>
              <h3 className="text-lg font-serif font-bold text-[#0C2340] mt-1">
                {CONTACT_INFO.telephone}
              </h3>
              <p className="text-xs text-[#4B5156] mt-2 leading-relaxed">
                Inquiries, weather updates, and booking coordinator consultations.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-[#2D6A4F] font-semibold">
              Mon–Sat: 8:00 AM – 6:00 PM
            </div>
          </div>

          {/* Electronic & Social Channels */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-stone-100 flex items-center justify-center text-[#0C2340] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0C2340]">
                Digital Channels
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-xs font-semibold text-[#0C2340] hover:text-[#2D6A4F] block mt-1 truncate"
              >
                {CONTACT_INFO.email}
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#2D6A4F] hover:text-[#0C2340] mt-2 font-medium"
              >
                <span>{CONTACT_INFO.facebook}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono">
              24-Hour Digital Dispatch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
