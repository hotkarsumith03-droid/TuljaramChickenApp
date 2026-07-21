import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useOrder } from "../../context/OrderContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 15,
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    color: "white",
    fontSize: 20,
  },

  card: {
    backgroundColor: "#222",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  status: {
    color: "#4CAF50",
    fontWeight: "bold",
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  date: {
    color: "#ea7d7d",
    marginTop: 5,
    marginBottom: 10,
  },

  itemsCount: {
    color: "#BBB",
    marginBottom: 12,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },

  item: {
    color: "white",
  },

  line: {
    height: 1,
    backgroundColor: "#444",
    marginVertical: 12,
  },

  total: {
    color: "#E53935",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 12,
  },
});
export default function OrdersScreen() {
  const { orders, loadOrders } = useOrder();

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  if (orders.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No orders found.
        </Text>
      </View>
    );
  }

 return (
  <ScrollView style={styles.container}>
    {orders.map((order, index) => (
      <View key={index} style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Order #{index + 1}</Text>
          <Text style={styles.status}>🟢 Delivered</Text>
        </View>

        <Text style={styles.date}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>

        <Text style={styles.itemsCount}>
          {order.items.length} Item(s)
        </Text>

        {order.items.map((item: any, i: number) => (
          <View key={i} style={styles.itemRow}>
            <Text style={styles.item}>
              {item.name} × {item.quantity}
            </Text>

            <Text style={styles.item}>
              ₹{item.price * item.quantity}
            </Text>
          </View>
        ))}

        <View style={styles.line} />

        <Text style={styles.total}>
          Grand Total : ₹{order.total}
        </Text>
      </View>
    ))}
  </ScrollView>
);

}
