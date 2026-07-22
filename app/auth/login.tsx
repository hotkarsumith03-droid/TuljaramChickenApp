import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../services/firebase";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");

      router.replace("/(tabs)");

    } catch (error:any) {

      alert(error.message);

    }

  };


  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Login
      </Text>


      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
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
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => router.replace("/auth/login")}
      >
        <Text style={styles.link}>
          Create Account
        </Text>
      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#111",
justifyContent:"center",
padding:25,
},

title:{
color:"white",
fontSize:32,
fontWeight:"bold",
textAlign:"center",
marginBottom:40,
},

input:{
backgroundColor:"#222",
color:"white",
padding:15,
borderRadius:12,
marginBottom:15,
},

button:{
backgroundColor:"#E53935",
padding:16,
borderRadius:12,
alignItems:"center",
},

buttonText:{
color:"white",
fontSize:18,
fontWeight:"bold",
},

link:{
color:"#4FC3F7",
textAlign:"center",
marginTop:20,
}

});