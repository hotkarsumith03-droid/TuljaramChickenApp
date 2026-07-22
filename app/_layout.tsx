import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { OrderProvider } from "../context/OrderContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="auth/login" options={{ headerShown: false }} />
              <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            </Stack>

            <StatusBar style="light" />
          </ThemeProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}
