import React, { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  ShoppingBag,
  Phone,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import Logo from './Logo';
import VegBadge from './VegBadge';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../config/business';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, grandTotal, setIsReviewOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-royal-950/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5 border-b border-royal-800/40'
          : 'bg-gradient-to-b from-royal-950/90 via-royal-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Royal Star Pizza Homepage"
          >
            <Logo size="md" className="group-hover:rotate-6 transition-transform" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black tracking-wider text-base sm:text-xl text-white group-hover:text-gold-400 transition-colors">
                  ROYAL STAR PIZZA
                </span>
                <VegBadge className="hidden sm:inline-flex" />
              </div>
              <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gold-400">
                {BUSINESS_CONFIG.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-cream-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call button */}
            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-cream-100 text-xs font-bold border border-white/15 transition-colors"
              title="Call Café"
            >
              <Phone size={13} className="text-gold-400" />
              <span>{BUSINESS_CONFIG.primaryPhone}</span>
            </a>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsReviewOpen(true)}
              className="relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-extrabold text-xs shadow-gold-glow transition-all active:scale-95"
              aria-label={`View Cart: ${totalCount} items`}
            >
              <ShoppingBag size={15} />
              <span className="hidden sm:inline">Order</span>
              <span className="bg-charcoal-950 text-gold-300 text-[10px] px-1.5 py-0.5 rounded-full font-black">
                {totalCount}
              </span>
              {totalCount > 0 && (
                <span className="hidden md:inline font-bold border-l border-charcoal-900/30 pl-2">
                  ₹{grandTotal}
                </span>
              )}
            </button>

            {/* Order Now CTA (Scroll to Menu) */}
            <a
              href="#menu"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-royal-700 hover:bg-royal-600 text-white font-extrabold text-xs border border-royal-500/50 shadow-md transition-all active:scale-95"
            >
              <Sparkles size={13} className="text-gold-300" />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-royal-950 border-b border-royal-800/80 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-royal-800/60">
            <VegBadge showText text="100% Vegetarian Café" />
            <span className="text-[11px] text-cream-200">Purkazi, Muzaffarnagar</span>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-cream-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-royal-800/60 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20"
            >
              <Phone size={14} className="text-gold-400" />
              <span>Call: {BUSINESS_CONFIG.primaryPhone}</span>
            </a>

            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-royal-700 text-white text-xs font-extrabold shadow-md"
            >
              <Sparkles size={14} className="text-gold-300" />
              <span>Explore Interactive Menu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

