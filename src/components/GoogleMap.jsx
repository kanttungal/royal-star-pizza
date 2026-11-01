import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function GoogleMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full rounded-3xl overflow-hidden border border-cream-300 shadow-royal bg-charcoal-900 flex flex-col">
      {/* Map Control Bar */}
      <div className="bg-charcoal-950 px-5 py-3.5 flex items-center justify-between text-white border-b border-charcoal-800">
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-gold-400" />
          <span className="text-xs sm:text-sm font-bold truncate">
            {BUSINESS_CONFIG.name} — Khadar Tiraha, Purkazi
          </span>
        </div>

        <a
          href={BUSINESS_CONFIG.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-charcoal-950 text-xs font-bold transition-all shadow-sm shrink-0"
        >
          <Navigation size={13} />
          <span>Get Directions</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Responsive Map Frame Container */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-charcoal-800">
        <iframe
          title="Royal Star Pizza Café Location Map"
          src={BUSINESS_CONFIG.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full filter saturate-100 contrast-105"
        ></iframe>

        {/* Fallback button overlay if map is loading or blocked by user ad-blockers */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cream-300 shadow-md text-xs text-charcoal-800 flex items-center gap-2">
          <span className="font-semibold">Plus Code:</span>
          <span className="font-mono text-royal-800 font-bold">{BUSINESS_CONFIG.address.plusCode}</span>
        </div>
      </div>
    </div>
  );
}

