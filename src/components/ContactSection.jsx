import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Navigation,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import GoogleMap from './GoogleMap';
import VegBadge from './VegBadge';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello Royal Star Pizza! I would like to inquire about your menu and availability.`
  )}`;

  return (
    <section id="contact" className="py-14 sm:py-24 bg-white border-t border-cream-200 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-100 text-royal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={13} className="text-royal-700" />
            <span>Find Us & Order</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Contact & Café Location
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-700">
            We are conveniently located at Khadar Tiraha in Purkazi. Call ahead or visit us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Café Address Card */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-royal-800 text-gold-300 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-lg text-charcoal-900">
                      Royal Star Pizza
                    </h3>
                    <VegBadge />
                  </div>
                  <p className="text-xs font-semibold text-royal-700 uppercase tracking-wider mt-0.5">
                    Purkazi, Muzaffarnagar
                  </p>
                  <p className="text-sm text-charcoal-700 mt-2 leading-relaxed">
                    {BUSINESS_CONFIG.address.line1}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.district}, {BUSINESS_CONFIG.address.state} — {BUSINESS_CONFIG.address.pincode}
                  </p>
                  <p className="text-xs text-charcoal-700 font-mono mt-1">
                    Plus Code: <strong>{BUSINESS_CONFIG.address.plusCode}</strong>
                  </p>

                  <div className="mt-4 pt-3 border-t border-cream-200 flex flex-wrap gap-2">
                    <a
                      href={BUSINESS_CONFIG.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-royal-800 hover:bg-royal-900 text-white text-xs font-bold transition-all"
                    >
                      <Navigation size={13} />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={BUSINESS_CONFIG.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-charcoal-200 text-charcoal-800 text-xs font-bold hover:bg-cream-100 transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>Open Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Calling Lines Card */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-lg text-charcoal-900">
                    Phone & Ordering Lines
                  </h3>
                  <p className="text-xs text-charcoal-700 mt-0.5">
                    Direct phone lines for inquiries and takeaway orders.
                  </p>

                  <div className="mt-3 space-y-2.5">
                    {/* Primary Number */}
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-cream-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700 block">
                          Primary Mobile / WhatsApp
                        </span>
                        <span className="text-sm font-bold text-charcoal-900">
                          {BUSINESS_CONFIG.primaryPhone}
                        </span>
                      </div>
                      <a
                        href={`tel:${BUSINESS_CONFIG.primaryPhoneRaw}`}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1 transition-all"
                      >
                        <PhoneCall size={12} />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* Secondary Mobile */}
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-cream-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700 block">
                          Alternative Phone
                        </span>
                        <span className="text-sm font-bold text-charcoal-900">
                          {BUSINESS_CONFIG.alternativePhone}
                        </span>
                      </div>
                      <a
                        href={`tel:${BUSINESS_CONFIG.alternativePhoneRaw}`}
                        className="px-3 py-1.5 rounded-lg bg-royal-800 hover:bg-royal-900 text-white text-xs font-bold inline-flex items-center gap-1 transition-all"
                      >
                        <PhoneCall size={12} />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* Landline */}
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-cream-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700 block">
                          Café Landline
                        </span>
                        <span className="text-sm font-bold text-charcoal-900">
                          {BUSINESS_CONFIG.landlinePhone}
                        </span>
                      </div>
                      <a
                        href={`tel:${BUSINESS_CONFIG.landlinePhoneRaw}`}
                        className="px-3 py-1.5 rounded-lg bg-white border border-charcoal-300 hover:bg-cream-100 text-charcoal-800 text-xs font-bold inline-flex items-center gap-1 transition-all"
                      >
                        <PhoneCall size={12} />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal-900">
                    Operating Hours
                  </h3>
                  <p className="text-base font-extrabold text-royal-900 mt-1">
                    {BUSINESS_CONFIG.hours.display}
                  </p>
                  <p className="text-xs text-charcoal-700 mt-0.5">
                    {BUSINESS_CONFIG.hours.days}
                  </p>
                  <p className="text-[11px] text-amber-800 font-medium bg-amber-50 px-2 py-1 rounded border border-amber-200 mt-2">
                    Note: Printed on menu card; subject to confirmation before final publication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}

