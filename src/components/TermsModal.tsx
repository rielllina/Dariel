import React from 'react';
import { X, Shield, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { TERMS_AND_CONDITIONS } from '../data/romblonData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl z-10 text-[#1E2022] max-h-[88vh] flex flex-col border border-stone-300">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#0C2340] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 text-[#E2B17A]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#E2B17A] block">
                Official Business Policies
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                rombloNatin Terms & Conditions
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terms modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#2D3134]">
          {/* Payment Policy */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Payment & Reservation Schedule</span>
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.paymentPolicy.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#C69255]" />
              <span>Cancellation & Refund Rules</span>
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.cancellationPolicy.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Travel Requirements */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#2D6A4F]" />
              <span>Travel Requirements & Identification</span>
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.travelRequirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Responsibility & Liability */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340]">
              Responsibility & Liability
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.responsibilityAndLiability.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Itinerary Changes & Force Majeure */}
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340]">
              Itinerary Changes & Maritime Safety
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.itineraryChanges.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Guest Conduct Code */}
          <div className="p-5 rounded-2xl bg-[#0C2340]/5 border border-[#0C2340]/15 space-y-2">
            <h3 className="font-serif font-bold text-base text-[#0C2340]">
              Guest Conduct & Environmental Code
            </h3>
            <ul className="space-y-1.5 text-[#4B5156] pl-6 list-disc">
              {TERMS_AND_CONDITIONS.guestConduct.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#0C2340] hover:bg-[#13335C] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
