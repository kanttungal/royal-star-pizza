import React from 'react';
import {
  Sparkles,
  Pizza,
  Flame,
  UtensilsCrossed,
  Layers,
  Cookie,
  Soup,
  Cake,
  PlusCircle,
  Gift
} from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menu';

const ICON_MAP = {
  Sparkles,
  Pizza,
  Flame,
  UtensilsCrossed,
  Layers,
  Cookie,
  Soup,
  Cake,
  PlusCircle,
  Gift
};

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  itemCounts = {}
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {MENU_CATEGORIES.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Sparkles;
          const isActive = activeCategory === cat.id;
          const count = itemCounts[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-royal-800 text-white shadow-royal ring-2 ring-gold-400 scale-[1.02]'
                  : 'bg-white text-charcoal-700 hover:bg-cream-100 hover:text-royal-900 border border-cream-200 shadow-sm'
              }`}
            >
              <IconComponent size={16} className={isActive ? 'text-gold-300' : 'text-royal-600'} />
              <span>{cat.name}</span>
              {count > 0 && (
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-royal-950 text-gold-300' : 'bg-cream-200 text-charcoal-700'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

