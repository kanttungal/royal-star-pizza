import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'royal_star_pizza_cart_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    orderType: 'Takeaway', // 'Takeaway' | 'Home Delivery' | 'Dine-in'
    notes: ''
  });

  const [isReviewOpen, setIsReviewOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to persist cart to localStorage', e);
    }
  }, [cart]);

  const addItem = (item, sizeKey = null, qtyToAdd = 1) => {
    let sizeDetails = null;
    let unitPrice = item.price;
    let effectiveKey = item.id;

    if (item.hasSizes && item.sizes) {
      const key = sizeKey || item.defaultSize || Object.keys(item.sizes)[0];
      sizeDetails = item.sizes[key];
      unitPrice = sizeDetails.price;
      effectiveKey = `${item.id}-${key}`;
    }

    setCart(prev => {
      const existing = prev[effectiveKey];
      const newQty = (existing ? existing.quantity : 0) + qtyToAdd;

      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[effectiveKey];
        return copy;
      }

      return {
        ...prev,
        [effectiveKey]: {
          key: effectiveKey,
          id: item.id,
          name: item.name,
          category: item.category,
          image: item.image,
          selectedSize: sizeKey || item.defaultSize || null,
          selectedSizeName: sizeDetails ? sizeDetails.name : null,
          price: unitPrice,
          quantity: newQty
        }
      };
    });
  };

  const updateQuantity = (itemKey, delta) => {
    setCart(prev => {
      const existing = prev[itemKey];
      if (!existing) return prev;

      const newQty = existing.quantity + delta;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[itemKey];
        return copy;
      }

      return {
        ...prev,
        [itemKey]: {
          ...existing,
          quantity: newQty
        }
      };
    });
  };

  const removeItem = (itemKey) => {
    setCart(prev => {
      const copy = { ...prev };
      delete copy[itemKey];
      return copy;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const cartItems = Object.values(cart);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const getItemQuantity = (itemId, sizeKey = null) => {
    const key = sizeKey ? `${itemId}-${sizeKey}` : itemId;
    return cart[key]?.quantity || 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        totalCount,
        grandTotal,
        customerInfo,
        setCustomerInfo,
        isReviewOpen,
        setIsReviewOpen,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        getItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

