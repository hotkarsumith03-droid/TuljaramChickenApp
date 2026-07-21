import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function OrderSuccess() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎉</Text>

      <Text style={styles.title}>Order Placed!</Text>

      <Text style={styles.subtitle}>
        Thank you for shopping with Tuljaram Chicken.
      </Text>

<TouchableOpacity
  style={styles.button}
  onPress={() => router.replace("/(tabs)")}
>
  <Text style={styles.buttonText}>
    Continue Shopping
  </Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  icon: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#bbb",
    marginTop: 15,
    textAlign: "center",
    fontSize: 18,
  },

  button: {
    backgroundColor: "#C62828",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});