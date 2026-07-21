import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useCart } from "../../context/CartContext";

export default function TabLayout() {
  const { cart } = useCart();

const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

<Tabs.Screen
  name="cart"
  options={{
    title: "Cart",
    tabBarBadge: cartCount > 0 ? cartCount : undefined,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="cart" size={size} color={color} />
    ),
  }}
/>

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}