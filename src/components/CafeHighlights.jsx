import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Utensils,
  Clock,
  Coins,
  SmilePlus,
  Flame,
  Award
} from 'lucide-react';

export default function CafeHighlights() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "100% Vegetarian Facility",
      description: "Strictly vegetarian recipes and dedicated vegetarian preparation."
    },
    {
      icon: Coins,
      title: "Value for Every Budget",
      description: "Single topping Pizza Mania starting at ₹59, hearty burgers from ₹45, and tasty snacks from ₹35."
    },
    {
      icon: Flame,
      title: "Baked Fresh on Order",
      description: "Every pizza is prepared with fresh crust, generous vegetable toppings, and melted mozzarella."
    },
    {
      icon: SmilePlus,
      title: "Takeaway & Quick Pickup",
      description: "Quick order turnaround at Khadar Tiraha, Purkazi. WhatsApp your order ahead for zero waiting."
    }
  ];

  return (
    <section id="highlights" className="py-16 sm:py-24 bg-cream-100 border-t border-cream-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-100 text-royal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-royal-700" />
            <span>Why Choose Royal Star</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Café Highlights & Quality
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-700">
            Dedicated to delicious vegetarian dining for Purkazi locals and travelers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-cream-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-800 flex items-center justify-center mb-4 group-hover:bg-royal-800 group-hover:text-gold-300 transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold text-base text-charcoal-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-100 text-[11px] font-bold text-royal-700 flex items-center gap-1">
                  <span>Royal Standard</span>
                  <span className="text-gold-500">★</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

