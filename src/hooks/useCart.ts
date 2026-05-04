import { useState, useCallback } from "react";
import { Product, CartItem } from "../types";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    },
    [removeFromCart],
  );

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0,
  );

  return {
    cartItems,
    isCartOpen,
    cartTotal,
    cartItemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
  };
}
