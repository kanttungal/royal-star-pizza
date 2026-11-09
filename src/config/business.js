/**
 * Royal Star Pizza — Centralized Business Configuration
 * Update any phone numbers, WhatsApp ordering number, opening hours, or address details here.
 */

export const BUSINESS_CONFIG = {
  name: "Royal Star Pizza",
  tagline: "It's Time For Pizza",
  headline: "Your Royal Slice of Happiness.",
  subheadline: "Freshly baked pizzas, loaded with flavour, and delicious vegetarian favourites.",
  badge: "100% Pure Vegetarian Café",
  
  // Ordering WhatsApp Number (country code 91 followed by 10-digit number)
  // Configured as +91 80579 00027
  whatsappNumber: "918057900027",
  whatsappDisplayNumber: "+91 80579 00027",

  // Primary Call Number
  primaryPhone: "+91 80579 00027",
  primaryPhoneRaw: "+918057900027",

  // Secondary Numbers (from Google Listing & Menu Card)
  alternativePhone: "+91 89370 31593",
  alternativePhoneRaw: "+918937031593",
  landlinePhone: "01332-297200",
  landlinePhoneRaw: "01332297200",

  // Address Details
  address: {
    line1: "Khadar Tiraha",
    city: "Purkazi",
    district: "Muzaffarnagar",
    state: "Uttar Pradesh",
    pincode: "251327",
    country: "India",
    plusCode: "MR5W+C82, Purquazi, Uttar Pradesh 251327",
    fullFormatted: "Khadar Tiraha, Purkazi, Muzaffarnagar, Uttar Pradesh 251327"
  },

  // Hours of Operation (Printed on menu card; subject to confirmation before launch)
  hours: {
    display: "10:00 AM – 10:00 PM",
    days: "Monday to Sunday (Open All 7 Days)",
    note: "Subject to owner confirmation before final publish"
  },

  // Currency
  currency: {
    symbol: "₹",
    code: "INR"
  },

  // Service options
  services: {
    pureVeg: true,
    dineIn: true,
    takeaway: true,
    homeDelivery: true, // Noted on site as subject to confirmation of current delivery radius
    homeDeliveryNotice: "Home delivery available within Purkazi limits (confirm order radius via WhatsApp)"
  },

  // Google Maps Links & Embed
  maps: {
    // Verified search URL pointing directly to Royal Star Pizza / Khadar Tiraha, Purquazi
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Star+Pizza+Khadar+Tiraha+Purkazi+Muzaffarnagar+251327",
    // Clean interactive embed map using standard Google Maps query
    embedUrl: "https://maps.google.com/maps?q=Royal%20Star%20Pizza%20Khadar%20Tiraha%20Purkazi%20Muzaffarnagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // Pending Owner Confirmation checklist for transparency
  verificationChecklist: [
    { item: "Primary WhatsApp ordering number", status: "Configured (+91 80579 00027)" },
    { item: "Secondary phone line", status: "Configured (+91 89370 31593)" },
    { item: "Landline line", status: "Configured (01332-297200 from menu card)" },
    { item: "Daily working hours", status: "10:00 AM – 10:00 PM (printed on card)" },
    { item: "Home delivery availability & zone", status: "Takeaway confirmed; delivery zone to be finalized" },
    { item: "Combo (4 Single Toppings @ ₹249)", status: "Displayed with note on availability confirmation" },
    { item: "Cheese Burst & Pan Pizza Large size prices", status: "Flagged for confirmation" }
  ]
};

