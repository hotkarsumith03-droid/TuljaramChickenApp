import { StyleSheet, Text, View } from "react-native";

export default function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.offer}>🔥 Today&apos;s Special</Text>

      <Text style={styles.title}>
        Fresh Chicken{"\n"}20% OFF
      </Text>

      <Text style={styles.desc}>
        Order before 12 PM and get free delivery.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#C62828",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    padding: 20,
  },

  offer: {
    color: "#FFD54F",
    fontWeight: "bold",
    fontSize: 16,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },

  desc: {
    color: "#fff",
    marginTop: 10,
    fontSize: 15,
  },
});
