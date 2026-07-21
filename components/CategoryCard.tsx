import { StyleSheet, Text, View } from "react-native";

type Props = {
  emoji: string;
  name: string;
};

export default function CategoryCard({ emoji, name }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    width: 90,
    height: 100,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  emoji: {
    fontSize: 36,
  },
  name: {
    color: "white",
    marginTop: 8,
    fontWeight: "600",
  },
});