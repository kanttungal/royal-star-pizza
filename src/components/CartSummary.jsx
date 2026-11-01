import React, { useState } from 'react';
import {
  ShoppingBag,
  Send,
  Eye,
  Trash2,
  User,
  Phone,
  FileText,
  MapPin,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { BUSINESS_CONFIG } from '../config/business';
import QuantityControl from './QuantityControl';
import VegBadge from './VegBadge';

export default function CartSummary() {
  const {
    cartItems,
    totalCount,
    grandTotal,
    updateQuantity,
    removeItem,
    clearCart,
    customerInfo,
    setCustomerInfo,
    setIsReviewOpen
  } = useCart();

  const [deliveryNoteOpen, setDeliveryNoteOpen] = useState(false);

  // If cart is empty, don't display or display subtle message
  if (cartItems.length === 0) {
    return null;
  }

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl(cartItems, customerInfo);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="order-summary" className="py-12 bg-gradient-to-b from-cream-100 to-cream-50 border-t-2 border-b-2 border-royal-200/60 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-royal-200 shadow-royal overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                <ShoppingBag size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-2xl tracking-tight text-white">
                    Your Order Summary
                  </h3>
                  <VegBadge />
                </div>
                <p className="text-xs sm:text-sm text-cream-200/90 mt-0.5">
                  Review your fresh vegetarian items before placing your order via WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-gold-300 border border-gold-400/30 text-xs font-bold">
                {totalCount} {totalCount === 1 ? 'Item' : 'Items'} Selected
              </span>
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-cream-300 hover:text-white px-2 py-1 rounded hover:bg-white/10 transition-colors"
                title="Clear entire cart"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Items Table / List */}
            <div className="divide-y divide-cream-200">
              {cartItems.map((item) => {
                const itemSubtotal = item.price * item.quantity;

                return (
                  <div key={item.key} className="py-4 first:pt-0 last:pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Item Image & Details */}
                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover border border-cream-200 shrink-0 shadow-sm"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-sm sm:text-base text-charcoal-900 truncate">
                            {item.name}
                          </h4>
                          <VegBadge />
                        </div>
                        {item.selectedSizeName && (
                          <span className="inline-block text-[11px] font-semibold text-royal-700 bg-royal-50 px-2 py-0.5 rounded border border-royal-100 mt-0.5">
                            Size: {item.selectedSizeName}
                          </span>
                        )}
                        <div className="text-xs text-charcoal-700 mt-1">
                          Unit price: <span className="font-semibold text-charcoal-900">₹{item.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity & Subtotal Controls */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t border-cream-100 sm:border-0">
                      <QuantityControl
                        quantity={item.quantity}
                        onIncrease={() => updateQuantity(item.key, 1)}
                        onDecrease={() => updateQuantity(item.key, -1)}
                        onRemove={() => removeItem(item.key)}
                        size="md"
                      />

                      <div className="text-right min-w-[80px]">
                        <span className="text-[10px] uppercase font-bold text-charcoal-700 block">Subtotal</span>
                        <span className="text-base sm:text-lg font-black text-royal-900">
                          ₹{itemSubtotal}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-charcoal-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Voluntary Customer Info Form */}
            <div className="mt-8 pt-6 border-t border-cream-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-700 flex items-center gap-1.5">
                  <User size={14} className="text-royal-700" />
                  Your Details for WhatsApp Message (Optional)
                </span>
                <span className="text-[11px] text-charcoal-700">Pre-fills in your order message</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-royal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-royal-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">Order Preference</label>
                  <select
                    value={customerInfo.orderType}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, orderType: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-royal-600 focus:bg-white"
                  >
                    <option value="Takeaway / Pick-up at Purkazi Café">Takeaway / Pick-up</option>
                    <option value="Home Delivery (Purkazi area - confirm distance)">Home Delivery (Confirm radius)</option>
                    <option value="Dine-in at Café">Dine-in at Café</option>
                  </select>
                </div>
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Special instructions (e.g. extra crispy crust, less spicy sauce, deliver near Khadar Tiraha)..."
                  className="w-full px-3 py-2 rounded-xl bg-cream-50 border border-cream-300 text-xs text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-royal-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Total and Action Buttons */}
            <div className="mt-8 pt-6 border-t-2 border-cream-200 flex flex-col md:flex-row items-center justify-between gap-6 bg-cream-50/80 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-charcoal-700 block">
                  Grand Total (Sum of Selected Items)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-royal-950">
                    ₹{grandTotal}
                  </span>
                  <span className="text-xs text-charcoal-700 font-medium">
                    (No hidden fees; prices directly from menu card)
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setIsReviewOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-royal-800 text-royal-900 hover:bg-royal-50 font-bold text-sm transition-all shadow-sm active:scale-95"
                >
                  <Eye size={17} />
                  <span>Check Order</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-700/25 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Send size={17} />
                  <span>Order with WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Notice Disclaimer */}
        <div className="mt-4 px-4 flex items-center justify-center gap-2 text-center text-xs text-charcoal-700">
          <ShieldCheck size={15} className="text-emerald-700 shrink-0" />
          <span>
            Clicking <strong>"Order with WhatsApp"</strong> opens WhatsApp with your pre-formatted order message to {BUSINESS_CONFIG.whatsappDisplayNumber}. Simply press send in WhatsApp to dispatch your order.
          </span>
        </div>
      </div>
    </section>
  );
}

