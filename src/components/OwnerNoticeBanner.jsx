import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, CheckCircle, Info } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function OwnerNoticeBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-500/15 border-b border-amber-500/30 text-amber-900 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info size={15} className="text-amber-700 shrink-0" />
          
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1 font-bold text-amber-800 hover:text-amber-950 underline shrink-0 cursor-pointer"
        >
          <span>{isOpen ? 'Hide Checklist' : 'View Confirmation Checklist'}</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-amber-500/20 grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-amber-950">
          {BUSINESS_CONFIG.verificationChecklist.map((check, idx) => (
            <div key={idx} className="flex items-start gap-1.5 bg-amber-50/80 p-2 rounded border border-amber-200">
              <span className="text-amber-700 font-bold">•</span>
              <div>
                <strong>{check.item}:</strong> {check.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

