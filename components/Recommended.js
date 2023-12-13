import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Recommended() {
  const recommended = [
    {
      id: 0,
      name: "Nandhana Palace",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "35 - 45",
      type: "Andhra",
    },
    {
      id: 0,
      name: "GFC Biriyani",
      image:
        "https://b.zmtcdn.com/data/pictures/0/20844770/f9582144619b80d30566f497a02e2c8d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      time: "10 - 35",
      type: "North Indian",
    },
    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },

    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },
    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {recommended?.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            margin: 10,
            borderRadius: 8,
          }}
        >
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 7,
              }}
              source={{ uri: item?.image }}
            />
          </View>
          <View style={{ padding: 10, flexDirection: "column" }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {item?.name}
            </Text>
            <Text
              style={{
                flex: 1,
                marginTop: 3,
                color: "gray",
                fontWeight: "500",
              }}
            >
              {item?.type}
            </Text>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <Ionicons name="ios-time" size={24} color="green" />
              <Text>{item?.time} mins</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
