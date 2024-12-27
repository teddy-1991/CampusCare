import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([{}]);
  const navigation = useNavigation();

  const fetchUsers = async () => {
    try {
      let response = await axios.get(
        "https://6758bdfa60576a194d11a492.mockapi.io/account"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  const handleLogin = async () => {
    console.log("Login button pressed!"); // 버튼 클릭 여부 확인용
    console.log(users);
    console.log(email, password);
    for (let user in users) {
      if (users[user].email == email && users[user].password == password) {
        if (users[user].student) {
          navigation.navigate("studentHome");
        } else {
          navigation.navigate("generalHome");
        }
      } else {
        console.log("user mismatched");
      }
    }
    Alert.alert("Login Failed", "Invalid email or password.");
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={{ resizeMode: "contain", width: 200, height: 170 }}
        source={require("../assets/logo.png")}
      />
      <Text style={{ fontWeight: 600, fontSize: 24, marginBlock: 25 }}>
        Sign-In
      </Text>
      <View
        style={{
          borderStyle: "solid",
          borderRadius: 9,
          borderWidth: 1,
          padding: 20,
          shadowColor: "#5b6267",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          elevation: 5,
          gap: 15,
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 18 }}>Sait Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={"Enter email address"}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={{ fontWeight: 500, fontSize: 18 }}>Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder={"password"}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          android_ripple={{ color: "#fff" }} // 버튼 클릭 효과
        >
          <Text style={{ color: "white", padding: 4, fontWeight: 500 }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <Pressable style={{}}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBlock: 50,
    padding: 0,
    gap: 15,
  },
  inputBox: {
    borderStyle: "solid",
    borderRadius: 9,
    borderWidth: 1,
    padding: 12,
    width: 300,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#37b6f5",
    color: "white",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBlock: 10,
  },
});
