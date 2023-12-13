import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-5">This will be the Landing Screen</Text>

      <Link href="/home" asChild>
        <Text>Click here to go to the Home Screen</Text>
      </Link>
    </View>
  );
}
