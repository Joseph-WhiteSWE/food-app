import {
  View,
  Text,
  Alert,
  Linking,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { SimpleLineIcons } from "@expo/vector-icons";

// How to Enable Location: Start

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
  console.log("My Address", displayCurrentAddress);
  // How to Enable Location: End

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
          <Text style={{ fonstSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fonstSize: 16, marginTop: 3 }}>
            {displayCurrentAddress}
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Hello</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
