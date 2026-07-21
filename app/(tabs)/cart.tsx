import { router } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
export default function CartScreen() {
  const { placeOrder } = useOrders();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();
  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const handleCheckout = async () => {
  if (cart.length === 0) return;

  try {
    await placeOrder(cart, grandTotal);
    clearCart();

    router.push("/address");
  } catch (error) {
    Alert.alert(
      "Could not place order",
      error instanceof Error ? error.message : "Please try again."
    );
  }
};

const deliveryFee = total > 0 ? 50 : 0;

const grandTotal = total + deliveryFee;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.summary}>
  <View style={styles.row}>
    <Text style={styles.summaryText}>Subtotal</Text>
    <Text style={styles.summaryText}>₹{total}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.summaryText}>Delivery</Text>
    <Text style={styles.summaryText}>₹{deliveryFee}</Text>
  </View>

  <View style={styles.row}>
    <Text style={styles.totalText}>Grand Total</Text>
    <Text style={styles.totalText}>₹{grandTotal}</Text>
  </View>

  <TouchableOpacity
    style={styles.checkoutButton}
    onPress={handleCheckout}
  >
    <Text style={styles.checkoutText}>
      Proceed to Checkout
    </Text>
  </TouchableOpacity>
</View>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        cart.map((item) => (
          
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.price}>₹{item.price}</Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>{item.quantity}</Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={{ color: "red", fontSize: 16 }}>Delete</Text>
            </TouchableOpacity>
          </View>
          
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 15,
  },

  empty: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#222",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },

  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    color: "#ff4d4d",
    marginTop: 8,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#C62828",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  quantity: {
    color: "white",
    marginHorizontal: 15,
    fontSize: 18,
  },
  summary: {
  backgroundColor: "#222",
  borderRadius: 15,
  padding: 20,
  marginTop: 20,
  marginBottom: 30,
},

row: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 12,
},

summaryText: {
  color: "#ddd",
  fontSize: 16,
},

totalText: {
  color: "white",
  fontSize: 20,
  fontWeight: "bold",
},

checkoutButton: {
  backgroundColor: "#E53935",
  padding: 15,
  borderRadius: 12,
  marginTop: 20,
  alignItems: "center",
},

checkoutText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},
});
