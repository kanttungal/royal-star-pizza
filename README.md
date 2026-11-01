# Royal Star Pizza — Premium Vegetarian Pizza Café Website

> **Location:** Khadar Tiraha, Purkazi, Muzaffarnagar, Uttar Pradesh 251327  
> **Brand Tagline:** *It's Time For Pizza*  
> **Identity:** 100% Pure Vegetarian Café

---

## 🚀 How to Run Locally

### Option 1: View the Already Running Server
The development server is **already running** in the background:
- **Local URL:** [http://localhost:3000/](http://localhost:3000/)

Simply click or open the link above in your web browser.

---

### Option 2: Running from your own Terminal / PowerShell

Because Node.js is installed in `C:\Users\Vishnu Kant\AppData\Local\Programs\nodejs`, open PowerShell in this directory (`d:\Royal Star Pizza`) and run:

```powershell
# 1. Add Node.js to your current terminal session path (if not already globally set)
$env:PATH = "C:\Users\Vishnu Kant\AppData\Local\Programs\nodejs;$env:PATH"

# 2. Start the development server
npm run dev
```

Then visit `http://localhost:3000/`.

To build the optimized production version:
```powershell
$env:PATH = "C:\Users\Vishnu Kant\AppData\Local\Programs\nodejs;$env:PATH"
npm run build
npm run preview
```

---

## 📁 Key Project Files

| File | Purpose |
|---|---|
| [`src/config/business.js`](file:///d:/Royal%20Star%20Pizza/src/config/business.js) | **Centralized business details:** Phone numbers, WhatsApp ordering number, address, Plus Code, opening hours, and maps. |
| [`src/data/menu.js`](file:///d:/Royal%20Star%20Pizza/src/data/menu.js) | **Interactive menu database:** Categories, pizzas (Simple, Classic, Treat, Special), sizes (Regular, Medium, Large), prices, burgers, sandwiches, snacks, pasta, desserts, and add-ons. |
| [`src/context/CartContext.jsx`](file:///d:/Royal%20Star%20Pizza/src/context/CartContext.jsx) | Real-time state management for item additions, sizes, quantity adjustments, subtotals, and local storage persistence. |
| [`src/utils/whatsapp.js`](file:///d:/Royal%20Star%20Pizza/src/utils/whatsapp.js) | Generates URL-encoded pre-filled WhatsApp order messages directed to the café's official number. |
| [`src/components/HeroSection.jsx`](file:///d:/Royal%20Star%20Pizza/src/components/HeroSection.jsx) | Premium royal red, gold, and charcoal hero with 100% veg badge, quick CTAs, and pizza showcase. |
| [`src/components/MenuGrid.jsx`](file:///d:/Royal%20Star%20Pizza/src/components/MenuGrid.jsx) | Interactive menu filter tabs (All, Pizzas, Mania, Burgers, Sandwiches, Snacks, Pasta, Desserts, Add-ons, Combos) with live search. |
| [`src/components/CartSummary.jsx`](file:///d:/Royal%20Star%20Pizza/src/components/CartSummary.jsx) | Auto-revealed order summary section once items are added, with WhatsApp order action. |
| [`src/components/OrderReviewModal.jsx`](file:///d:/Royal%20Star%20Pizza/src/components/OrderReviewModal.jsx) | Modal for reviewing items, editing quantities, entering voluntary customer info, and placing orders. |
| [`src/components/GoogleMap.jsx`](file:///d:/Royal%20Star%20Pizza/src/components/GoogleMap.jsx) | Google Maps embed pointing to Khadar Tiraha, Purquazi (`MR5W+C82`). |

---

## 📋 Business Details for Café Owner Confirmation Before Final Launch

1. **Primary Ordering WhatsApp Number:** Currently configured as `+91 96671 70027` (from menu card). Alternate Google listing number is `+91 80579 00027`. Confirm which number receives customer WhatsApp orders.
2. **Operating Hours:** Transcribed as `10:00 AM – 10:00 PM` daily; verify exact weekly timings.
3. **Delivery Radius:** Takeaway is enabled; confirm current delivery radius and delivery conditions within Purkazi.
4. **Combo Availability:** The 4-Pizza Mania Single Toppings combo @ ₹249 is currently marked as subject to daily availability.
5. **Cheese Burst / Pan Pizza Large Size:** Marked on card as "Confirm"; confirm prices before publishing.
