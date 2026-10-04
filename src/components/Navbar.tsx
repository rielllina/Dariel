import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Shield } from 'lucide-react';

interface NavbarProps {
  onPlanTripClick: () => void;
  onOpenTerms: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanTripClick, onOpenTerms }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Explore', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Packages', href: '#packages' },
    { label: 'Local Products', href: '#crafts' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0C2340]/90 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'py-6 bg-gradient-to-b from-[#050D18]/80 via-[#050D18]/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="group flex items-baseline gap-1 text-white select-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#E2B17A] transition-colors">
              romblo<span className="font-sans font-extrabold text-[#E2B17A] italic">Natin</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#E2B17A] transition-colors relative py-1 text-xs uppercase tracking-widest after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E2B17A] hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onPlanTripClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Plan Your Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onPlanTripClick}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A]"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-white hover:text-[#E2B17A] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-[#0C2340] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 text-white">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-serif text-2xl font-bold">
                  romblo<span className="font-sans text-[#E2B17A] italic">Natin</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-stone-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-3 text-xs text-[#E2B17A] font-serif italic border-b border-white/5">
                “Discover. Experience. Protect Romblon.”
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-stone-200 hover:text-[#E2B17A] py-2 flex items-center justify-between border-b border-white/5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400" />
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerms();
                  }}
                  className="text-left text-sm text-stone-300 hover:text-white py-2 flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span>Terms & Booking Policies</span>
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanTripClick();
                }}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0C2340] bg-[#E2B17A] hover:bg-[#EDD1AD] flex items-center justify-center gap-2 shadow-lg"
              >
                <Compass className="w-4 h-4" />
                <span>Plan Your Trip</span>
              </button>
              <p className="text-[11px] text-center text-stone-400 mt-3">
                Official Romblon Tourism Platform
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
