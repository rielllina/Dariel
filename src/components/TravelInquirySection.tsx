import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Calendar, Users, Phone, Mail, User } from 'lucide-react';
import { TravelInquiry } from '../types';

export const TravelInquirySection: React.FC = () => {
  const [formData, setFormData] = useState<TravelInquiry>({
    fullName: '',
    email: '',
    contactNumber: '',
    travelType: 'Solo',
    preferredPackage: '01 — SOLO: Find your own rhythm',
    preferredDate: '',
    travelersCount: 1,
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="inquiry" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1E2022] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2D6A4F] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>START YOUR ADVENTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0C2340] tracking-tight">
              Your Romblon story starts here.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#4B5156] font-light">
              Submit your preferred dates and travel style. Our local coordinators in Odiongan and Romblon Town will tailor your ideal island route.
            </p>
          </div>

          {submitted ? (
            /* Confirmation State Animation */
            <div className="py-12 px-6 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0C2340]">
                Travel Inquiry Received!
              </h3>
              <p className="text-sm text-[#2D3134] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="font-semibold text-[#0C2340]">{formData.fullName}</strong>. Your inquiry for <strong className="font-semibold text-[#0C2340]">{formData.preferredPackage}</strong> has been logged with rombloNatin.
              </p>
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-[#4B5156] max-w-md mx-auto">
                <p>
                  * <strong>Please Note:</strong> This is a booking inquiry rather than a confirmed reservation. Our travel coordinator will contact you at <strong>{formData.email || formData.contactNumber}</strong> within 24 hours with custom arrangements and payment guidelines.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-colors cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maria@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Contact Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Contact Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +63 917 123 4567"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                  />
                </div>

                {/* Travel Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Travel Type</span>
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                  >
                    <option value="Solo">Solo Traveler</option>
                    <option value="Couple">Couple / Romantic</option>
                    <option value="Family">Family / Multi-Generational</option>
                    <option value="Barkada">Barkada / Group of Friends</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {/* Preferred Package */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2">
                    Preferred Experience Format
                  </label>
                  <select
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                  >
                    <option value="01 — SOLO: Find your own rhythm">01 — SOLO: Find your own rhythm</option>
                    <option value="02 — COUPLE: Make memories together">02 — COUPLE: Make memories together</option>
                    <option value="03 — FAMILY: Adventure for everyone">03 — FAMILY: Adventure for everyone</option>
                    <option value="04 — BARKADA: Bring your favorite people">04 — BARKADA: Bring your favorite people</option>
                    <option value="Custom Island Hopping Journey">Custom Island Hopping Journey</option>
                  </select>
                </div>

                {/* Number of Travelers */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2">
                    Travelers Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.travelersCount}
                    onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors tabular-nums"
                  />
                </div>
              </div>

              {/* Preferred Travel Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>Target Travel Date (or Month)</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0C2340] mb-2">
                  Special Requests or Inquiries
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on dietary preferences, mobility needs, or specific destinations you'd love to visit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:border-[#0C2340] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Inquiry...' : 'Send Travel Inquiry'}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#4B5156] text-center italic">
                By submitting, you agree to receive communications regarding your travel itinerary from rombloNatin local coordinators.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
