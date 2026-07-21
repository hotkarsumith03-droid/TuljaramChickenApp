import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={22}
        color="#999"
      />

      <TextInput
        placeholder="Search chicken, mutton..."
        placeholderTextColor="#777"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#222",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 15,
    height: 50,
  },

  input: {
    flex: 1,
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});