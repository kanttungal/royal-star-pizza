import React from 'react';
import {
  Heart,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowUp,
  Send
} from 'lucide-react';
import Logo from './Logo';
import VegBadge from './VegBadge';
import { BUSINESS_CONFIG } from '../config/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-cream-100 pt-16 pb-12 border-t border-royal-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-800">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="lg" />
              <div>
                <span className="font-serif font-black tracking-wider text-xl text-white block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-xs uppercase font-extrabold tracking-widest text-gold-400">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/80 max-w-sm leading-relaxed">
              Purkazi's premium 100% vegetarian pizza café. Fresh hand-tossed dough, melted mozzarella, loaded toppings, burgers, sandwiches, pasta, and desserts.
            </p>

            <div className="pt-1 flex items-center gap-2">
              <VegBadge showText text="100% Pure Vegetarian" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li>
                <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-400 transition-colors">Interactive Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Royal Star</a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-gold-400 transition-colors">Café Highlights</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Café Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Café Details
            </h4>
            <div className="space-y-2.5 text-xs text-cream-200/80">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-gold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <span>Primary: {BUSINESS_CONFIG.primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-gold-400 shrink-0" />
                <span>Alternative: {BUSINESS_CONFIG.alternativePhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-gold-400 shrink-0" />
                <span>Daily: {BUSINESS_CONFIG.hours.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved. 100% Pure Vegetarian Café.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-cream-300/50">
              Purkazi, Muzaffarnagar (UP)
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-royal-900 text-cream-100 transition-colors"
            >
              <ArrowUp size={13} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

