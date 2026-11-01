import React, { useEffect } from 'react';
import {
  X,
  Trash2,
  Send,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';
import QuantityControl from './QuantityControl';
import VegBadge from './VegBadge';

export default function OrderReviewModal() {
  const {
    cartItems,
    totalCount,
    grandTotal,
    updateQuantity,
    removeItem,
    clearCart,
    customerInfo,
    setCustomerInfo,
    isReviewOpen,
    setIsReviewOpen
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isReviewOpen) {
        setIsReviewOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReviewOpen, setIsReviewOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isReviewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isReviewOpen]);

  if (!isReviewOpen) return null;

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl(cartItems, customerInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-review-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn"
      onClick={() => setIsReviewOpen(false)}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-cream-200 overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-800 text-white px-6 py-5 flex items-center justify-between border-b border-royal-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 id="order-review-title" className="font-serif font-bold text-xl text-white">
                Review Your Order
              </h3>
              <p className="text-xs text-cream-200">
                {totalCount} {totalCount === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsReviewOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-cream-200 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close review modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Items List */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-cream-200">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-charcoal-700 font-medium">Your cart is currently empty.</p>
              <button
                type="button"
                onClick={() => setIsReviewOpen(false)}
                className="mt-4 px-4 py-2 bg-royal-800 text-white text-xs font-bold rounded-xl"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const subtotal = item.price * item.quantity;
                return (
                  <div key={item.key} className="py-4 first:pt-0 last:pb-4 flex items-center justify-between gap-3 sm:gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-cream-200 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-sm text-charcoal-900 truncate">
                          {item.name}
                        </h4>
                        <VegBadge />
                      </div>

                      {item.selectedSizeName && (
                        <p className="text-xs text-royal-700 font-semibold mt-0.5">
                          Size: {item.selectedSizeName}
                        </p>
                      )}

                      <p className="text-xs text-charcoal-700 mt-1">
                        ₹{item.price} × {item.quantity} = <strong className="text-charcoal-900">₹{subtotal}</strong>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <QuantityControl
                        quantity={item.quantity}
                        onIncrease={() => updateQuantity(item.key, 1)}
                        onDecrease={() => updateQuantity(item.key, -1)}
                        onRemove={() => removeItem(item.key)}
                        size="sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-charcoal-400 hover:text-red-600 p-1 rounded transition-colors"
                        title="Delete item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Order Information Snapshot */}
              <div className="pt-4 mt-2 bg-cream-50 rounded-2xl p-4 border border-cream-200 space-y-2 text-xs text-charcoal-700">
                <div className="flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1 text-charcoal-700">
                    <MapPin size={13} className="text-royal-700" /> Café Location:
                  </span>
                  <span className="text-charcoal-900">Khadar Tiraha, Purkazi</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1 text-charcoal-700">
                    <Clock size={13} className="text-royal-700" /> Working Hours:
                  </span>
                  <span className="text-charcoal-900">{BUSINESS_CONFIG.hours.display}</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-1 text-charcoal-700">
                    <Phone size={13} className="text-royal-700" /> WhatsApp Line:
                  </span>
                  <span className="text-royal-800 font-bold">{BUSINESS_CONFIG.whatsappDisplayNumber}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        {cartItems.length > 0 && (
          <div className="bg-cream-100 p-5 sm:p-6 border-t border-cream-200 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-charcoal-700 block">
                  Grand Total
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-black text-royal-950">
                  ₹{grandTotal}
                </span>
              </div>

              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                {totalCount} Total Items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsReviewOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-charcoal-300 bg-white text-charcoal-800 hover:bg-cream-50 font-bold text-xs transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Continue Shopping</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  handleWhatsAppOrder();
                  setIsReviewOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.01]"
              >
                <Send size={16} />
                <span>Order with WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-charcoal-700 text-center">
              <ShieldCheck size={14} className="text-emerald-700 shrink-0" />
              <span>You will review and send the message inside WhatsApp. No auto-charges.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

