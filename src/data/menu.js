/**
 * Royal Star Pizza — Official Menu Data
 * Source of truth: Original printed café menu card.
 * All prices in INR (₹). 100% Pure Vegetarian.
 */

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'Sparkles' },
  { id: 'pizza', name: 'Pizzas', icon: 'Pizza', subcategories: ['Simple Veg', 'Veg Classic', 'Veg Treat', 'Veg Special'] },
  { id: 'pizza-mania', name: 'Pizza Mania', icon: 'Flame' },
  { id: 'burgers', name: 'Burgers', icon: 'UtensilsCrossed' },
  { id: 'sandwiches', name: 'Sandwiches', icon: 'Layers' },
  { id: 'snacks', name: 'Snacks & Breads', icon: 'Cookie' },
  { id: 'pasta', name: 'Pasta', icon: 'Soup' },
  { id: 'desserts', name: 'Desserts', icon: 'Cake' },
  { id: 'addons', name: 'Crust & Add-ons', icon: 'PlusCircle' },
  { id: 'combos', name: 'Combos & Deals', icon: 'Gift' }
];

export const MENU_ITEMS = [
  // ==========================================
  // PIZZAS — SIMPLE VEG
  // ==========================================
  {
    id: 'margherita',
    name: 'Margherita Pizza',
    category: 'pizza',
    subcategory: 'Simple Veg',
    description: 'Classic delight with 100% real mozzarella cheese on an herb-seasoned golden crust.',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80',
    badge: 'Classic',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 99 },
      medium: { name: 'Medium (9.5")', price: 215 },
      large: { name: 'Large (12")', price: 395 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'cheese-tomato',
    name: 'Cheese & Tomato Pizza',
    category: 'pizza',
    subcategory: 'Simple Veg',
    description: 'Juicy ripe tomatoes layered generously over creamy melted mozzarella cheese.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
    badge: 'Popular',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 99 },
      medium: { name: 'Medium (9.5")', price: 215 },
      large: { name: 'Large (12")', price: 395 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'cheese-corn',
    name: 'Cheese & Corn Pizza',
    category: 'pizza',
    subcategory: 'Simple Veg',
    description: 'Golden sweet corn kernels blended with luscious melted cheese and herbs.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    badge: 'Sweet & Cheesy',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 99 },
      medium: { name: 'Medium (9.5")', price: 215 },
      large: { name: 'Large (12")', price: 395 }
    },
    defaultSize: 'regular'
  },

  // ==========================================
  // PIZZAS — VEG CLASSIC
  // ==========================================
  {
    id: 'double-cheese-margherita',
    name: 'Double Cheese Margherita',
    category: 'pizza',
    subcategory: 'Veg Classic',
    description: 'An indulgent overload of double mozzarella cheese for the true cheese lover.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80',
    badge: 'Extra Cheese',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 155 },
      medium: { name: 'Medium (9.5")', price: 285 },
      large: { name: 'Large (12")', price: 465 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'fresh-veggie',
    name: 'Fresh Veggie Pizza',
    category: 'pizza',
    subcategory: 'Veg Classic',
    description: 'Crisp green capsicum, crunchy onions, and ripe tomatoes with rich mozzarella.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    badge: 'Bestseller',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 155 },
      medium: { name: 'Medium (9.5")', price: 285 },
      large: { name: 'Large (12")', price: 465 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'double-veggie',
    name: 'Double Veggie Pizza',
    category: 'pizza',
    subcategory: 'Veg Classic',
    description: 'Double portions of garden fresh capsicum, juicy tomatoes, and onions.',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=700&q=80',
    badge: 'Double Toppings',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 155 },
      medium: { name: 'Medium (9.5")', price: 285 },
      large: { name: 'Large (12")', price: 465 }
    },
    defaultSize: 'regular'
  },

  // ==========================================
  // PIZZAS — VEG TREAT
  // ==========================================
  {
    id: 'farmhouse',
    name: 'Farmhouse Pizza',
    category: 'pizza',
    subcategory: 'Veg Treat',
    description: 'Delightful medley of crisp capsicum, diced onions, ripe tomatoes, and mushrooms.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80',
    badge: 'Customer Favorite',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 195 },
      medium: { name: 'Medium (9.5")', price: 325 },
      large: { name: 'Large (12")', price: 510 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'country-special',
    name: 'Country Special Pizza',
    category: 'pizza',
    subcategory: 'Veg Treat',
    description: 'Traditional countryside harvest of onion, capsicum, and fresh tomato over herbs.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=700&q=80',
    badge: 'Special',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 195 },
      medium: { name: 'Medium (9.5")', price: 325 },
      large: { name: 'Large (12")', price: 510 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'spicy-triple-tango',
    name: 'Spicy Triple Tango',
    category: 'pizza',
    subcategory: 'Veg Treat',
    description: 'Zesty red paprika, golden sweet corn, and crisp capsicum with a spicy kick.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80',
    badge: 'Spicy',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 195 },
      medium: { name: 'Medium (9.5")', price: 325 },
      large: { name: 'Large (12")', price: 510 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'peppy-paneer',
    name: 'Peppy Paneer Pizza',
    category: 'pizza',
    subcategory: 'Veg Treat',
    description: 'Juicy spiced paneer cubes, crisp capsicum, and spicy red paprika with cheese.',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=700&q=80',
    badge: 'Paneer Treat',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 195 },
      medium: { name: 'Medium (9.5")', price: 325 },
      large: { name: 'Large (12")', price: 510 }
    },
    defaultSize: 'regular'
  },

  // ==========================================
  // PIZZAS — VEG SPECIAL
  // ==========================================
  {
    id: 'veggie-paradise',
    name: 'Veggie Paradise',
    category: 'pizza',
    subcategory: 'Veg Special',
    description: 'Gold corn, black olives, capsicum, and red paprika on special royal sauce.',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=700&q=80',
    badge: 'Royal Favorite',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 225 },
      medium: { name: 'Medium (9.5")', price: 395 },
      large: { name: 'Large (12")', price: 599 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'deluxe-veggie',
    name: 'Deluxe Veggie Pizza',
    category: 'pizza',
    subcategory: 'Veg Special',
    description: 'Loaded with onion, capsicum, mushroom, corn, and tender paneer chunks.',
    image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?auto=format&fit=crop&w=700&q=80',
    badge: 'Loaded Veg',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 225 },
      medium: { name: 'Medium (9.5")', price: 395 },
      large: { name: 'Large (12")', price: 599 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'tandoori-paneer',
    name: 'Tandoori Paneer Pizza',
    category: 'pizza',
    subcategory: 'Veg Special',
    description: 'Marinated spicy tandoori paneer, red paprika, onion, and mint drizzle.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    badge: 'Desi Tandoori',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 225 },
      medium: { name: 'Medium (9.5")', price: 395 },
      large: { name: 'Large (12")', price: 599 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'veg-extravaganza',
    name: 'Veg. Extravaganza',
    category: 'pizza',
    subcategory: 'Veg Special',
    description: 'Black olives, onion, capsicum, mushroom, corn, tomato, and extra mozzarella.',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=700&q=80',
    badge: 'Supreme Extravaganza',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 225 },
      medium: { name: 'Medium (9.5")', price: 395 },
      large: { name: 'Large (12")', price: 599 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'special-royal-star',
    name: 'Special Royal Star Pizza',
    category: 'pizza',
    subcategory: 'Veg Special',
    description: 'Chef signature creation packed with exotic vegetables, premium paneer, and rich sauce.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    badge: 'Chef Signature ⭐',
    hasSizes: true,
    sizes: {
      regular: { name: 'Regular (7")', price: 225 },
      medium: { name: 'Medium (9.5")', price: 395 },
      large: { name: 'Large (12")', price: 599 }
    },
    defaultSize: 'regular'
  },

  // ==========================================
  // PIZZA MANIA — SINGLE TOPPINGS
  // ==========================================
  {
    id: 'mania-onion',
    name: 'Onion Pizza Mania',
    category: 'pizza-mania',
    description: 'Single topping delight with crunchy onions and melted cheese on a fresh crust.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=700&q=80',
    badge: '₹59 Only'
  },
  {
    id: 'mania-tomato',
    name: 'Tomato Pizza Mania',
    category: 'pizza-mania',
    description: 'Single topping of ripe red tomato slices over creamy cheese sauce.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
    badge: '₹59 Only'
  },
  {
    id: 'mania-capsicum',
    name: 'Capsicum Pizza Mania',
    category: 'pizza-mania',
    description: 'Crisp green bell pepper slices sprinkled over savory melted cheese.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
    badge: 'Value Pick'
  },
  {
    id: 'mania-sweet-corn',
    name: 'Sweet Corn Pizza Mania',
    category: 'pizza-mania',
    description: 'Juicy golden sweet corn over gooey mozzarella cheese crust.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    badge: 'Crispy & Sweet'
  },
  {
    id: 'mania-paneer-special',
    name: 'Paneer Special Mania',
    category: 'pizza-mania',
    description: 'Tender paneer cubes seasoned with Indian spices on a bubbly cheese crust.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=700&q=80',
    badge: 'Paneer Lover'
  },
  {
    id: 'mania-loaded-veg',
    name: 'Loaded Veg Mania',
    category: 'pizza-mania',
    description: 'A pocket-friendly pizza loaded with multiple crunchy garden vegetables.',
    price: 140,
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=700&q=80',
    badge: 'Loaded Veg'
  },

  // ==========================================
  // BURGERS
  // ==========================================
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    category: 'burgers',
    description: 'Crispy seasoned vegetable patty with fresh lettuce, onions, and signature dressing.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    badge: 'Value Burger'
  },
  {
    id: 'premium-burger',
    name: 'Premium Burger',
    category: 'burgers',
    description: 'Double vegetable delight with extra cheese slice, jalapeño sauce, and fresh salad.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    badge: 'Cheesy Delight'
  },

  // ==========================================
  // SANDWICHES
  // ==========================================
  {
    id: 'cheese-sandwich',
    name: 'Cheese Sandwich',
    category: 'sandwiches',
    description: 'Toasted golden bread layered with molten cheese, mild herbs, and butter.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    badge: 'Grilled'
  },
  {
    id: 'cheese-paneer-sandwich',
    name: 'Cheese Paneer Sandwich',
    category: 'sandwiches',
    description: 'Generously stuffed with spiced paneer, melted cheese, and fresh capsicum.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=700&q=80',
    badge: 'Top Pick'
  },

  // ==========================================
  // SNACKS & BREADS
  // ==========================================
  {
    id: 'zingy-parcel',
    name: 'Zingy Parcel',
    category: 'snacks',
    description: 'Crispy folded dough filled with seasoned paneer, harissa mayo, and herbs.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    badge: 'Quick Bite'
  },
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    category: 'snacks',
    description: 'Freshly baked baguette slices brushed with fragrant garlic butter and oregano.',
    price: 69,
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=700&q=80',
    badge: 'Crispy Herb'
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    category: 'snacks',
    description: 'Golden crispy potato fingers lightly salted, served piping hot.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80',
    badge: 'Crispy'
  },
  {
    id: 'calzone-pockets',
    name: 'Calzone Pockets',
    category: 'snacks',
    description: 'Oven-baked folded pizza pocket loaded with molten mozzarella and vegetables.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=700&q=80',
    badge: 'Stuffed Pocket'
  },
  {
    id: 'stuffed-garlic-bread',
    name: 'Stuffed Garlic Bread',
    category: 'snacks',
    description: 'Freshly baked garlic bread filled with gooey cheese, corn, and jalapeños.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=700&q=80',
    badge: 'Cheesy & Stuffed'
  },

  // ==========================================
  // PASTA
  // ==========================================
  {
    id: 'white-sauce-pasta',
    name: 'White Sauce Pasta',
    category: 'pasta',
    description: 'Creamy béchamel sauce tossed with al dente penne, herbs, and tender vegetables.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281781?auto=format&fit=crop&w=700&q=80',
    badge: 'Creamy Alfredo'
  },
  {
    id: 'red-sauce-pasta',
    name: 'Red Sauce Pasta',
    category: 'pasta',
    description: 'Tangy Italian tomato arrabbiata sauce with garlic, chili flakes, and basil.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80',
    badge: 'Tangy Arrabbiata'
  },
  {
    id: 'tandoori-pasta',
    name: 'Tandoori Pasta',
    category: 'pasta',
    description: 'Fusion style penne pasta coated in rich smoky tandoori sauce and herbs.',
    price: 110,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    badge: 'Smoky Fusion'
  },

  // ==========================================
  // DESSERTS
  // ==========================================
  {
    id: 'choco-lava-cake',
    name: 'Choco Lava Cake',
    category: 'desserts',
    description: 'Warm chocolate cake with a rich molten liquid chocolate center. Pure bliss.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
    badge: 'Sweet Ending'
  },

  // ==========================================
  // CRUST & ADD-ONS
  // ==========================================
  {
    id: 'addon-extra-cheese',
    name: 'Extra Cheese Add-on',
    category: 'addons',
    description: 'Add an extra blanket of 100% mozzarella cheese to your pizza.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=700&q=80',
    badge: 'Add-on',
    hasSizes: true,
    sizes: {
      regular: { name: 'For Regular Pizza', price: 30 },
      medium: { name: 'For Medium Pizza', price: 55 },
      large: { name: 'For Large Pizza', price: 80 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'addon-extra-topping',
    name: 'Extra Topping Add-on',
    category: 'addons',
    description: 'Add extra vegetable toppings of your choice to your pizza.',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=700&q=80',
    badge: 'Add-on',
    hasSizes: true,
    sizes: {
      regular: { name: 'For Regular Pizza', price: 20 },
      medium: { name: 'For Medium Pizza', price: 40 },
      large: { name: 'For Large Pizza', price: 60 }
    },
    defaultSize: 'regular'
  },
  {
    id: 'addon-cheese-burst',
    name: 'Cheese Burst Crust Upgrade',
    category: 'addons',
    description: 'Crust filled with gooey molten cheese that bursts with every bite.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    badge: 'Crust Upgrade',
    hasSizes: true,
    sizes: {
      regular: { name: 'For Regular Pizza', price: 70 },
      medium: { name: 'For Medium Pizza', price: 90 }
      // Large is unconfirmed on menu card; flagged for confirmation
    },
    defaultSize: 'regular',
    unconfirmedNotice: 'Large size Cheese Burst price to be confirmed with café'
  },
  {
    id: 'addon-pan-pizza',
    name: 'Pan Pizza Crust Upgrade',
    category: 'addons',
    description: 'Thick, fluffy, and golden pan crust baked to perfection in a pan.',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=700&q=80',
    badge: 'Crust Upgrade',
    hasSizes: true,
    sizes: {
      regular: { name: 'For Regular Pizza', price: 20 },
      medium: { name: 'For Medium Pizza', price: 40 }
      // Large is unconfirmed on menu card; flagged for confirmation
    },
    defaultSize: 'regular',
    unconfirmedNotice: 'Large size Pan Pizza price to be confirmed with café'
  },

  // ==========================================
  // COMBOS & DEALS
  // ==========================================
  {
    id: 'combo-4-pizza-mania',
    name: '4 Pizza Mania Super Combo',
    category: 'combos',
    description: 'Any 4 Single Topping Pizzas (Printed options: Onion, Tomato, Capsicum, Sweet Corn). Huge family savings!',
    price: 249,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    badge: 'Mega Saver Combo',
    availabilityNotice: 'Subject to daily availability & confirmation by café owner upon WhatsApp order.'
  }
];

