import React, { useState } from 'react';
import { ShoppingBag, AlertCircle } from 'lucide-react';
import VegBadge from './VegBadge';
import SizeSelector from './SizeSelector';
import QuantityControl from './QuantityControl';
import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const [selectedSize, setSelectedSize] = useState(item.defaultSize || (item.hasSizes ? 'regular' : null));
  const [imageError, setImageError] = useState(false);

  // Determine effective unit price
  const currentPrice = item.hasSizes && item.sizes && selectedSize && item.sizes[selectedSize]
    ? item.sizes[selectedSize].price
    : item.price;

  // Key in cart for this specific size
  const itemCartKey = item.hasSizes && selectedSize
    ? `${item.id}-${selectedSize}`
    : item.id;

  const currentQuantity = getItemQuantity(item.id, selectedSize);

  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80';

  const handleAddToCart = () => {
    addItem(item, selectedSize, 1);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Food Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-charcoal-900">
        <img
          src={imageError ? fallbackImage : item.image}
          alt={item.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <VegBadge />
          {item.badge && (
            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-royal-700/95 text-white backdrop-blur-sm shadow-md border border-royal-500/30">
              {item.badge}
            </span>
          )}
        </div>

        {/* Subcategory pill if present */}
        {item.subcategory && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-gold-300 backdrop-blur-sm border border-gold-400/30">
              {item.subcategory}
            </span>
          </div>
        )}

        {/* Price tag on image for fixed-price items */}
        {!item.hasSizes && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-xl shadow-md border border-gold-400/40">
            <span className="text-xs text-charcoal-700 font-semibold">Price: </span>
            <span className="text-base font-extrabold text-royal-900">₹{item.price}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-serif font-bold text-lg text-charcoal-900 group-hover:text-royal-800 transition-colors leading-snug">
              {item.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-700/80 line-clamp-2 mb-3">
            {item.description}
          </p>

          {/* Unconfirmed notice or availability notice */}
          {item.unconfirmedNotice && (
            <div className="mb-3 p-2 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-1.5 text-[11px] text-amber-800 font-medium">
              <AlertCircle size={14} className="shrink-0 text-amber-600" />
              <span>{item.unconfirmedNotice}</span>
            </div>
          )}

          {item.availabilityNotice && (
            <div className="mb-3 p-2 rounded-lg bg-royal-50 border border-royal-200 flex items-center gap-1.5 text-[11px] text-royal-800 font-medium">
              <AlertCircle size={14} className="shrink-0 text-royal-600" />
              <span>{item.availabilityNotice}</span>
            </div>
          )}

          {/* Size Selector for multi-size pizzas and crusts */}
          {item.hasSizes && (
            <div className="mb-3">
              <SizeSelector
                sizes={item.sizes}
                selectedSize={selectedSize}
                onSelectSize={(sizeKey) => setSelectedSize(sizeKey)}
              />
            </div>
          )}
        </div>

        {/* Price & Cart Actions Bottom Bar */}
        <div className="pt-3 border-t border-cream-200 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 block">
              {item.hasSizes ? 'Selected Price' : 'Total'}
            </span>
            <span className="text-xl font-extrabold text-royal-900">
              ₹{currentPrice}
            </span>
          </div>

          <div>
            {currentQuantity > 0 ? (
              <QuantityControl
                quantity={currentQuantity}
                onIncrease={() => updateQuantity(itemCartKey, 1)}
                onDecrease={() => updateQuantity(itemCartKey, -1)}
                size="md"
              />
            ) : (
              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-royal-800 hover:bg-royal-900 text-white font-bold text-xs shadow-md shadow-royal-950/20 active:scale-95 transition-all group/btn"
              >
                <ShoppingBag size={14} className="group-hover/btn:rotate-12 transition-transform" />
                <span>Add to Cart</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

