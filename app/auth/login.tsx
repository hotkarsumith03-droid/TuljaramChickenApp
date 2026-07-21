import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { auth } from "../../services/firebase";
export default function LoginScreen() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    router.replace("/(tabs)");

  } catch (error: any) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tuljaram Chicken</Text>

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
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? "Logging in…" : "Login"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("../signup")}
      >
        <Text style={styles.link}>
          Don&apos;t have an account? Sign Up
        </Text>
      </TouchableOpacity>

<Button
  title="Login"
  onPress={() => router.replace("/(tabs)")}
/>
    
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
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#222",
    color: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#E53935",
    padding: 16,
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
    fontSize: 16,
  },
});
