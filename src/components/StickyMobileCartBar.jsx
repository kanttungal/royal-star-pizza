import React from 'react';
import { ShoppingBag, Send, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';

export default function StickyMobileCartBar() {
  const { cartItems, totalCount, grandTotal, setIsReviewOpen, customerInfo } = useCart();

  if (cartItems.length === 0) return null;

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl(cartItems, customerInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-royal-200/80 shadow-[0_-8px_25px_rgba(0,0,0,0.15)] md:hidden">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left: Total & Items */}
        <div
          onClick={() => setIsReviewOpen(true)}
          className="flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-royal-800 text-white flex items-center justify-center shrink-0 shadow-md">
            <ShoppingBag size={18} />
            <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-charcoal-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              {totalCount}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-charcoal-700 block">Total</span>
            <span className="text-lg font-black text-royal-950 font-serif leading-none">
              ₹{grandTotal}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsReviewOpen(true)}
            className="px-3 py-2 rounded-xl border border-royal-800 text-royal-900 bg-white font-bold text-xs flex items-center gap-1 active:scale-95"
          >
            <Eye size={14} />
            <span>Check</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-700/20 active:scale-95"
          >
            <Send size={14} />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}

