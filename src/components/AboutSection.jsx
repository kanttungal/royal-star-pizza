import React from 'react';
import { Leaf, Pizza, Maximize2, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import VegBadge from './VegBadge';

export default function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: "100% Vegetarian Menu",
      desc: "Every single dish on our menu is strictly vegetarian, prepared with quality mozzarella cheese and fresh garden produce.",
      badge: "Pure Veg"
    },
    {
      icon: Pizza,
      title: "Pizzas, Pasta & Snacks",
      desc: "An extensive café menu covering fresh hand-tossed pizzas, crispy burgers, toasted sandwiches, baked garlic breads, and pasta.",
      badge: "Full Variety"
    },
    {
      icon: Maximize2,
      title: "Multiple Pizza Sizes",
      desc: "Choose from Regular (7\"), Medium (9.5\"), or Large (12\") sizes across all our classic, treat, and special pizza categories.",
      badge: "3 Sizes"
    },
    {
      icon: MessageSquare,
      title: "Convenient WhatsApp Ordering",
      desc: "Select your items online and dispatch your pre-formatted order directly to our café phone line on WhatsApp with one click.",
      badge: "Direct Chat"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-cream-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-100 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Vegetarian Pizza with melted cheese"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-royal-950 text-white p-5 rounded-2xl shadow-xl border border-gold-400/30 max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <VegBadge />
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    Purkazi Landmark
                  </span>
                </div>
                <p className="text-xs text-cream-200">
                  Located right at <strong>Khadar Tiraha</strong>, Purkazi.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Description & Feature Cards */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-50 text-royal-800 text-xs font-bold uppercase tracking-widest mb-3 border border-royal-200">
              <Heart size={14} className="text-royal-600" />
              <span>About Royal Star Pizza</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              A Royal Experience in <span className="text-royal-800">Every Bite.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-charcoal-700/85 leading-relaxed">
              Situated at Khadar Tiraha in Purkazi, Muzaffarnagar, <strong>Royal Star Pizza</strong> is a dedicated vegetarian pizza café serving a hearty selection of freshly baked pizzas, cheesy snacks, burgers, sandwiches, and pasta.
            </p>

            <p className="mt-3 text-sm sm:text-base text-charcoal-700/85 leading-relaxed">
              Whether you are stopping by for an afternoon snack, grabbing dinner with family, or ordering your favorite pizza on WhatsApp, our kitchen is dedicated to 100% vegetarian preparation with honest flavours and prompt service.
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 rounded-2xl bg-cream-50/80 border border-cream-200 hover:border-royal-300 hover:bg-cream-100 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-9 h-9 rounded-xl bg-royal-800 text-gold-300 flex items-center justify-center shadow-sm">
                          <Icon size={18} />
                        </div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white text-royal-800 border border-cream-300">
                          {feat.badge}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-charcoal-900 mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-charcoal-700 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

