import React from 'react';
import { CartProvider } from './context/CartContext';
import OwnerNoticeBanner from './components/OwnerNoticeBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuGrid from './components/MenuGrid';
import CartSummary from './components/CartSummary';
import AboutSection from './components/AboutSection';
import CafeHighlights from './components/CafeHighlights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrderReviewModal from './components/OrderReviewModal';
import StickyMobileCartBar from './components/StickyMobileCartBar';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal-900 selection:bg-royal-700 selection:text-white">
        {/* Top Preview Banner */}
        <OwnerNoticeBanner />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Premium Hero Section */}
          <HeroSection />

          {/* 2 & 3. Category Navigation & Complete Interactive Vegetarian Menu */}
          <MenuGrid />

          {/* 4. Dynamic Cart / Order Summary (Revealed when items in cart) */}
          <CartSummary />

          {/* 5. About Royal Star Pizza */}
          <AboutSection />

          {/* 6. Café Highlights */}
          <CafeHighlights />

          {/* 7 & 8. Contact Information & Google Maps Location */}
          <ContactSection />
        </main>

        {/* 9. Footer */}
        <Footer />

        {/* Interactive Modals and Sticky Controls */}
        <OrderReviewModal />
        <StickyMobileCartBar />
      </div>
    </CartProvider>
  );
}

