import React from 'react';

export default function SizeSelector({ sizes, selectedSize, onSelectSize, className = "" }) {
  if (!sizes || Object.keys(sizes).length === 0) return null;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-700">
        Select Size:
      </span>
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-cream-100 rounded-xl border border-cream-200">
        {Object.entries(sizes).map(([key, size]) => {
          const isSelected = selectedSize === key;
          // Extract short label (e.g. Regular, Medium, Large)
          const shortName = key.charAt(0).toUpperCase() + key.slice(1);

          return (
            <button
              key={key}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectSize(key);
              }}
              className={`py-1.5 px-1 rounded-lg text-xs font-semibold flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? 'bg-royal-800 text-white shadow-md shadow-royal-950/20 ring-2 ring-gold-400'
                  : 'bg-white/80 text-charcoal-700 hover:bg-white hover:text-royal-900 border border-transparent'
              }`}
            >
              <span className="font-bold">{shortName}</span>
              <span className={`text-[11px] font-extrabold ${isSelected ? 'text-gold-300' : 'text-royal-700'}`}>
                ₹{size.price}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

