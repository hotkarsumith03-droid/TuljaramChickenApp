import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";
type Props = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: any;
};

export default function ProductCard({
  id,
  name,
  price,
  rating,
  image,
}: Props) {
  const { addToCart } = useCart();

  return (
    
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        addToCart({
          id,
          name,
          price,
          image,
        })
      }
    >
      <Image source={image} style={styles.image} />

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.rating}>⭐ {rating}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>₹{price}/kg</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    resizeMode: "cover",
  },

  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },

  rating: {
    color: "#FFD54F",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    color: "#ff5252",
    fontSize: 22,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#C62828",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
