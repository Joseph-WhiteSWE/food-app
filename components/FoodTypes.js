import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

export default function FoodTypes() {
  const items = [
    {
      id: "0",
      name: "Offers",
      description: "Up to 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Legends",
      description: "Across India",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items?.map((item, index) => (
        <View
          key={index}
          style={{
            width: 90,
            borderColor: "#E0E0E0",
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 1,
            borderRadius: 5,
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={{ uri: item?.image }}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 13, fontWeight: "500", marginTop: 6 }}>
            {item?.name}
          </Text>
          <Text style={{ fontSize: 12, color: "gray", marginTop: 3 }}>
            {item?.description}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
