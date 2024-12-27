import { Image, StyleSheet, View } from "react-native";
import React from "react";

export default function splash() {
  return (
    <View style={styles.container}>
      <Image
        style={{ resizeMode: "contain", width: 250 }}
        source={require("../assets/logo.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
