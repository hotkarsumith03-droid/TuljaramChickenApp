import React, { createContext, useContext, useState } from "react";


type Product = {
  id: number;
  name: string;
  price: number;
  image: number;
};

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      return existing
        ? currentCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.flatMap((item) => {
        if (item.id !== id) return [item];
        return item.quantity === 1 ? [] : [{ ...item, quantity: item.quantity - 1 }];
      })
    );
  };

  const removeFromCart = (id: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
