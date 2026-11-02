import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Filter } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menu';
import MenuCard from './MenuCard';
import CategoryFilter from './CategoryFilter';

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Compute counts per category
  const itemCounts = useMemo(() => {
    const counts = { all: MENU_ITEMS.length };
    MENU_CATEGORIES.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = MENU_ITEMS.filter(item => item.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // Category match
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Subcategory match (if pizza)
      const matchesSubcategory =
        selectedSubcategory === 'all' ||
        !item.subcategory ||
        item.subcategory.toLowerCase() === selectedSubcategory.toLowerCase();

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.subcategory && item.subcategory.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query));

      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [activeCategory, selectedSubcategory, searchQuery]);

  // Subcategories available for active category (e.g. Pizza)
  const currentCategoryObj = MENU_CATEGORIES.find(c => c.id === activeCategory);
  const subcategories = currentCategoryObj?.subcategories || [];

  return (
    <section id="menu" className="py-16 sm:py-24 bg-cream-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal-100 text-royal-800 text-xs font-extrabold uppercase tracking-widest mb-3 border border-royal-200">
            <Sparkles size={14} className="text-royal-600" />
            <span>Interactive Café Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Explore Our <span className="text-royal-800">Royal Flavours</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-700/80">
            100% vegetarian pizzas with loaded toppings, molten cheese, hand-tossed dough, and mouthwatering café snacks.
          </p>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Margherita, Paneer, Pasta, Burger..."
              className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-cream-300 text-sm font-medium text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-royal-600 focus:border-royal-600 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1 rounded-full"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-700 w-full md:w-auto justify-end">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-cream-200 shadow-sm">
              Showing <strong className="text-royal-800">{filteredItems.length}</strong> delicious items
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setSelectedSubcategory('all');
            }}
            itemCounts={itemCounts}
          />
        </div>

        {/* Subcategories (if Pizza category is selected) */}
        {subcategories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 pt-1 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-xs font-bold text-charcoal-700 flex items-center gap-1 shrink-0 mr-1">
              <Filter size={13} /> Pizza Tier:
            </span>
            <button
              type="button"
              onClick={() => setSelectedSubcategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedSubcategory === 'all'
                  ? 'bg-royal-700 text-white shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              All Tiers
            </button>
            {subcategories.map(sub => (
              <button
                key={sub}
                type="button"
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubcategory.toLowerCase() === sub.toLowerCase()
                    ? 'bg-royal-700 text-white shadow-sm'
                    : 'bg-white text-charcoal-700 hover:bg-cream-100 border border-cream-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-cream-200 shadow-sm max-w-md mx-auto p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-royal-50 text-royal-700 flex items-center justify-center">
              <Search size={32} />
            </div>
            <h3 className="font-serif font-bold text-xl text-charcoal-900 mb-2">No matching dishes found</h3>
            <p className="text-sm text-charcoal-700/80 mb-6">
              Try adjusting your search terms or select "All Items" to browse our complete vegetarian menu.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedSubcategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-royal-800 text-white font-bold text-xs hover:bg-royal-900 shadow-royal transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

