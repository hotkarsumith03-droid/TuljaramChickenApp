import { router } from "expo-router";
import { signOut } from "firebase/auth";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../services/firebase";

export default function ProfileScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/auth/login");
    } catch (error: any) {
      Alert.alert("Logout Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <Text style={styles.email}>
        {auth.currentUser?.email}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  email: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#E53935",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});