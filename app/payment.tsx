import { router } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function PaymentScreen() {
  const [method, setMethod] = useState("Cash on Delivery");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Payment Method</Text>

      {["Cash on Delivery", "UPI", "Credit / Debit Card"].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.option}
          onPress={() => setMethod(item)}
        >
          <Text style={styles.radio}>
            {method === item ? "🔘" : "⚪"}
          </Text>

          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: "/order-success",
            params: { payment: method },
          })
        }
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  radio: {
    fontSize: 24,
    marginRight: 15,
  },
  optionText: {
    color: "white",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});