import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Landing Screen",
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          title: "Home Screen",
        }}
      />
      <Stack.Screen
        name="hotel"
        options={{
          title: "Hotel",
        }}
      />
    </Stack>
  );
}
