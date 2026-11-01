import React from 'react';
import {
  Sparkles,
  Send,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  MapPin,
  Bike
} from 'lucide-react';
import Logo from './Logo';
import VegBadge from './VegBadge';
import { BUSINESS_CONFIG } from '../config/business';

export default function HeroSection() {
  const whatsappHeroUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Royal Star Pizza! I would like to check the menu and place an order.`
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-gradient-to-b from-royal-950 via-charcoal-950 to-charcoal-900 text-white"
    >
      {/* Decorative Background Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-700/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Crown Crest Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-bold mb-6 shadow-inner">
              <Sparkles size={14} className="text-gold-400" />
              <span>Purkazi's Premier Pizza Destination</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <VegBadge showText text="100% Veg" />
            </div>

            {/* Tagline & Brand */}
            <div className="mb-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-gold-400 block mb-1">
                ROYAL STAR PIZZA • {BUSINESS_CONFIG.tagline}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Your Royal Slice of <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent">
                  Happiness.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-cream-200/90 max-w-2xl leading-relaxed">
              {BUSINESS_CONFIG.subheadline} Hand-tossed dough, 100% real mozzarella cheese, and rich aromatic toppings crafted fresh daily at Khadar Tiraha, Purkazi.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-royal-700 hover:bg-royal-600 text-white font-extrabold text-sm sm:text-base shadow-royal hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 border border-royal-500/40"
              >
                <span>Explore Menu</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Send size={18} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Takeaway & Home Delivery Subtle Highlight Banner */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-cream-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="font-semibold text-white">Fresh Takeaway & Dine-in</span>
              </div>
              <div className="flex items-center gap-2" title="Delivery available in Purkazi subject to confirmation of distance">
                <Bike size={16} className="text-gold-400" />
                <span>Home Delivery (Confirm radius via WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-royal-300" />
                <span>10:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pizza Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-gold-400/20 bg-gradient-to-tr from-royal-900/40 to-gold-500/10 animate-pulse pointer-events-none"></div>

            {/* Central Pizza Photo Card */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg aspect-square rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/15 shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85"
                alt="Royal Star Vegetarian Pizza Loaded with Veggies"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />

              {/* Floating Badge 1: 100% Real Cheese */}
              <div className="absolute top-6 left-6 bg-charcoal-950/85 backdrop-blur-md text-white px-3.5 py-2 rounded-2xl border border-white/20 shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <div className="text-left">
                  <span className="text-[10px] text-cream-200 block font-medium">100% Pure</span>
                  <span className="text-xs font-black text-gold-400">Vegetarian Mozzarella</span>
                </div>
              </div>

              {/* Floating Badge 2: Starting Price */}
              <div className="absolute bottom-6 right-6 bg-royal-950/90 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl border border-gold-400/40 shadow-xl text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                  Pizza Mania From
                </span>
                <span className="font-serif text-2xl font-black text-white">₹59</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

