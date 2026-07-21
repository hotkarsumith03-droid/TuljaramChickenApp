import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductScreen() {
  const { name, price, rating } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.price}>₹{price}/kg</Text>

      <Text style={styles.rating}>⭐ {rating}</Text>

      <Text style={styles.description}>
        Fresh, hygienically processed meat delivered directly to your doorstep.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 25,
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  price: {
    color: "#ff5252",
    fontSize: 28,
    marginTop: 15,
    fontWeight: "bold",
  },

  rating: {
    color: "#FFD54F",
    fontSize: 22,
    marginTop: 10,
  },

  description: {
    color: "#CCCCCC",
    fontSize: 18,
    marginTop: 25,
    lineHeight: 28,
  },
});