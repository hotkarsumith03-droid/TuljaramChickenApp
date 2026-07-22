import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../services/firebase";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Alert.alert("Success", "Account created successfully!");

      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
<TouchableOpacity
  onPress={() => router.replace("/auth/login")}
>
  <Text style={styles.link}>
    Already have an account? Login
  </Text>
</TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
  },
  input: {
    backgroundColor: "#222",
    color: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#4FC3F7",
    textAlign: "center",
    marginTop: 20,
  },
});