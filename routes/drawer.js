import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Dimensions } from "react-native";
import React from "react";
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
// stacks
import LoginStack from "./loginRoute";
import ProductStack from "./productRoute";
import Header from "../components/header/header";

const { height, width } = Dimensions.get("window");
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: LoginStack,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
          drawerIcon: () => (
            <Image
              source={{
                uri:
                  "https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png",
              }}
              style={{ width: 26, height: 26 }}
            />
          ),
        };
      },
    },
    Product: {
      screen: ProductStack,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
          drawerIcon: () => (
            <Image
              source={{
                uri:
                  "https://www.pngitem.com/pimgs/m/325-3256236_products-icon-vector-product-icon-png-transparent-png.png",
              }}
              style={{ width: 26, height: 26 }}
            />
          ),
        };
      },
    },
    Logout: {
      screen: LoginStack,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
          drawerIcon: () => (
            <Image
              source={{
                uri:
                  "https://lh3.googleusercontent.com/proxy/wh-4zEmKCuv0_IW_TUT1KnwDyb-q7JlkmQLf6QMG3bcuDqEZNQhelnlE1l_YrrhysZQVCCXhhoQwKmByQ3h-wLDxBdDyPYNFArYeQf5fQyIDHdONmpRg6NmYH2vfLYW3EBl1QxdsW8s1u1himssW0r4",
              }}
              style={{ width: 26, height: 26 }}
            />
          ),
        };
      },
    },
    Checkout: {
      screen: LoginStack,

      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
          drawerIcon: () => (
            <Image
              source={{
                uri:
                  "https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/cart512x512.png",
              }}
              style={{ width: 26, height: 26 }}
            />
          ),
        };
      },
    },
  },
  {
    drawerPosition: "left",
    drawerWidth: width *2/3,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "red",
    },
  }
);

export default createAppContainer(RootDrawerNavigator);
