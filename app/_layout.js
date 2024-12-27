import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" />
      <Stack.Screen name="generalHome" options={{ headerShown: false }} />
      <Stack.Screen name="studentHome" options={{ headerShown: false }} />
      <Stack.Screen name="splash" options={{ title: "Splash" }} />
      <Stack.Screen
        name="submitRequest"
        options={{ title: "Request", headerShown: false }}
      />
    </Stack>
  );
};

export default _layout;
