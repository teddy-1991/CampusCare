import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function StudentHome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#311c8b",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: 12,
          paddingTop: 20,
        }}
      >
        <Pressable>
          <Image
            source={require("../assets/user.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
        <Text style={{ fontSize: 28, fontWeight: 500 }}>Campus Care</Text>
        <Pressable>
          <Image
            source={require("../assets/setting.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
      </View>

      <View style={{ paddingInline: 20, gap: 20 }}>
        <Image
          style={{ width: "100%", borderRadius: 10 }}
          source={require("../assets/Schoolsimg.jpg")}
        ></Image>

        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 50,
            padding: 20,
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("submitRequest")}
        >
          <Image
            source={require("../assets/Request.png")}
            style={{ width: 35, height: 35 }}
          ></Image>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>
            Submit a Request
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          backgroundColor: "#311c8b",
          position: "absolute",
          bottom: 0,
          insetInline: "0",
          padding: 20,
          paddingBottom: 30,
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/home.png")}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/application.png")}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/notification.png")}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/menu.png")}
          ></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    position: "relative",
  },
});
