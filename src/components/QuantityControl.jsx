import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function QuantityControl({
  quantity = 0,
  onIncrease,
  onDecrease,
  onRemove,
  size = 'md',
  className = ''
}) {
  const sizeClasses = {
    sm: {
      btn: 'w-7 h-7 text-xs',
      text: 'w-6 text-xs font-bold',
      icon: 13
    },
    md: {
      btn: 'w-8 h-8 text-sm',
      text: 'w-8 text-sm font-bold',
      icon: 15
    },
    lg: {
      btn: 'w-10 h-10 text-base',
      text: 'w-10 text-base font-bold',
      icon: 18
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center bg-cream-100 border border-royal-200/80 rounded-xl p-0.5 shadow-inner ${className}`}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDecrease();
        }}
        aria-label="Decrease quantity"
        className={`${currentSize.btn} rounded-lg flex items-center justify-center text-charcoal-700 bg-white shadow-sm hover:bg-royal-50 hover:text-royal-700 active:scale-95 transition-all`}
      >
        {quantity === 1 && onRemove ? (
          <Trash2 size={currentSize.icon} className="text-red-500" />
        ) : (
          <Minus size={currentSize.icon} />
        )}
      </button>

      <span className={`${currentSize.text} text-center font-extrabold text-charcoal-900 tabular-nums select-none`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIncrease();
        }}
        aria-label="Increase quantity"
        className={`${currentSize.btn} rounded-lg flex items-center justify-center text-white bg-royal-700 shadow-sm hover:bg-royal-800 active:scale-95 transition-all`}
      >
        <Plus size={currentSize.icon} />
      </button>
    </div>
  );
}

