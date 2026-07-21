import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { products } from "../Data/product";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === Number(id));
  if (!product) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>
        Product not found
      </Text>
    </View>
  );
}

 return (
  <ScrollView style={styles.container}>

    <Image source={product.image} style={styles.image} />

    <Text style={styles.name}>{product.name}</Text>

    <Text style={styles.price}>₹{product.price}</Text>

    <Text style={styles.description}>
      {product.description}
    </Text>

    <View style={styles.quantityContainer}>
      <TouchableOpacity
        onPress={() => quantity > 1 && setQuantity(quantity - 1)}
        style={styles.qtyButton}
      >
        <Text style={styles.qtyText}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity
        onPress={() => setQuantity(quantity + 1)}
        style={styles.qtyButton}
      >
        <Text style={styles.qtyText}>+</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      style={styles.cartButton}
      onPress={() => {
        addToCart({
          ...product,
          quantity,
        } as any);
      }}
    >
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.buyButton}
      onPress={() => {
        addToCart({
          ...product,
          quantity,
        } as any);

        router.push("/(tabs)/cart");
      }}
    >
      <Text style={styles.buttonText}>Buy Now</Text>
    </TouchableOpacity>

  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 20,
    resizeMode: "cover",
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  price: {
    color: "#E53935",
    fontSize: 24,
    marginVertical: 10,
  },
  description: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
  },
  quantityContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginVertical: 20,
},

qtyButton: {
  backgroundColor: "#E53935",
  width: 45,
  height: 45,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 12,
},

qtyText: {
  color: "white",
  fontSize: 22,
  fontWeight: "bold",
},

quantity: {
  color: "white",
  fontSize: 22,
  marginHorizontal: 20,
},

cartButton: {
  backgroundColor: "#E53935",
  padding: 16,
  borderRadius: 15,
  alignItems: "center",
  marginTop: 20,
},

buyButton: {
  backgroundColor: "#2E7D32",
  padding: 16,
  borderRadius: 15,
  alignItems: "center",
  marginTop: 15,
},

buttonText: {
  color: "white",
  fontWeight: "bold",
  fontSize: 18,
},
});