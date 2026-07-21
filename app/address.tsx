import { router } from "expo-router";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { auth, db } from "../services/firebase";

export default function AddressScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
const continueToPayment = async () => {
  if (!name || !phone || !address) {
    Alert.alert("Missing Information", "Please fill all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "addresses"), {
      userId: auth.currentUser?.uid,
      name,
      phone,
      address,
      createdAt: new Date().toISOString(),
    });

    router.push("/payment");
  } catch (error) {
    Alert.alert("Error", "Failed to save address.");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#888"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="Complete Address"
        placeholderTextColor="#888"
        multiline
        style={[styles.input, { height: 120 }]}
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={continueToPayment}
      >
        <Text style={styles.buttonText}>
          Continue to Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#E53935",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
