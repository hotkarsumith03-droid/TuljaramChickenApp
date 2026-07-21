import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { db } from "../services/firebase";
import { useAuth } from "./AuthContext";

type Order = {
  items: any[];
  total: number;
  createdAt: string;
  userId: string;
  email: string;
};

type OrderContextType = {
  orders: Order[];
  placeOrder: (items: any[], total: number) => Promise<void>;
  loadOrders: () => Promise<void>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();

  const loadOrders = useCallback(async () => {
    if (!user) {
      setOrders([]);
      return;
    }

    const ordersQuery = query(collection(db, "orders"), where("userId", "==", user.uid));
    const snapshot = await getDocs(ordersQuery);

    const data = snapshot.docs
      .map((doc) => doc.data() as Order)
      .sort((first, second) => second.createdAt.localeCompare(first.createdAt));

    setOrders(data);
  }, [user]);

const placeOrder = async (items: any[], total: number) => {
  if (!user) {
    throw new Error("Please sign in before placing an order.");
  }

  const order: Order = {
    items,
    total,
    createdAt: new Date().toISOString(),
    userId: user.uid,
    email: user.email ?? "",
  };

  await addDoc(collection(db, "orders"), order);

  await loadOrders();
};

  const value = useMemo(
    () => ({ orders, placeOrder, loadOrders }),
    [orders, loadOrders]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}
export function useOrder() {
  const context = React.useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within OrderProvider");
  }

  return context;
}
