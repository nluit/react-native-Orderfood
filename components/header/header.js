import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({ navigation }) {
  const onOpenMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 25,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={onOpenMenu}>
        <Icon
          name={"ios-menu"}
          size={28}
          color={"black"}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}
