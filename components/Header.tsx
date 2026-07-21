import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>📍 Deliver to Home</Text>
      <Text style={styles.title}>Tuljaram Chicken Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#111",
  },
  location: {
    color: "#bbb",
    fontSize: 14,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
});
