import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size] || sizeClasses.md} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Royal Crest */}
        <circle cx="50" cy="50" r="47" fill="#70102b" stroke="#f59e0b" strokeWidth="3" />
        <circle cx="50" cy="50" r="43" fill="#450616" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" />

        {/* Crown at top */}
        <path
          d="M33 34 L38 21 L50 28 L62 21 L67 34 Z"
          fill="#f59e0b"
          stroke="#fbbf24"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="21" r="2" fill="#fff" />
        <circle cx="50" cy="28" r="2.5" fill="#fff" />
        <circle cx="62" cy="21" r="2" fill="#fff" />

        {/* Golden Pizza Slice */}
        <path
          d="M50 36 L72 73 C65 77 35 77 28 73 Z"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="1.5"
        />
        {/* Crust */}
        <path
          d="M27 72 C36 78 64 78 73 72"
          stroke="#b45309"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Mozzarella & Toppings */}
        <circle cx="44" cy="53" r="3.5" fill="#dc2626" />
        <circle cx="56" cy="56" r="3" fill="#16a34a" />
        <circle cx="50" cy="65" r="3.5" fill="#dc2626" />
        <circle cx="40" cy="64" r="2.5" fill="#16a34a" />
        <circle cx="58" cy="67" r="2.5" fill="#fbbf24" />

        {/* Central Star */}
        <polygon
          points="50,42 52,47 57,47 53,50 55,55 50,52 45,55 47,50 43,47 48,47"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

