import {
  View,
  Text,
  Alert,
  Linking,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Recommended from "../components/Recommended";
import FoodTypes from "../components/FoodTypes";
import Delivery from "../components/Delivery";

// how to enable location:start

export default function home() {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location ..."
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "This app needs location access to function. Please enable location access in your device settings.",
        [
          { text: "Go to Settings", onPress: () => Linking.openSettings() },
          { text: "Cancel" },
        ],
        { cancelable: false }
      );
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const streetAddress = address[0].name;
      for (let item of response) {
        let address = `${item.name}, ${item.postalCode}, ${item?.city}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  // how to enable location:end

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          padding: 10,
        }}
      >
        <SimpleLineIcons name="location-pin" size={24} color="#E52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>
            {displayCurrentAddress}
          </Text>
        </View>
      </View>
      {/* search bar element:start */}
      <View
        className="flex-row items-center justify-between px-2 py-2 rounded-md my-2"
        style={{
          borderColor: "#c0c0c0",
          borderWidth: 1,
          width: 360,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <TextInput
          placeholder="Search for Food"
          placeholderTextColor={"gray"}
        ></TextInput>
        <AntDesign name="search1" size={24} color="#e52b50" />
      </View>
      {/* search bar element:end */}
      <Carousel />
      <Categories />
      <Recommended />
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        EXPLORE
      </Text>
      {/* will utilize the component in htx eat and meet: start*/}
      <FoodTypes />
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          letterSpacing: 4,
          marginBottom: 5,
          color: "gray",
        }}
      >
        ALL RESTAURANTS
      </Text>
      <Delivery />
      {/* will utilize the component in htx eat and meet: end*/}
    </ScrollView>
  );
}
