import React from 'react';

export default function VegBadge({ showText = false, text = "100% Pure Veg", className = "" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} title="100% Pure Vegetarian">
      <div className="w-4 h-4 border-[1.5px] border-emerald-600 bg-white rounded flex items-center justify-center shrink-0 shadow-sm p-[2px]">
        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
      </div>
      {showText && (
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          {text}
        </span>
      )}
    </div>
  );
}

