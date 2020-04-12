import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import ProductContainer from "../containers/ProductContainer";
  const screens = {
  screen: ProductContainer,
};

const option = {
  defaultNavigationOptions: {
    headerShown: false,
  },
};
const productNavigation = createStackNavigator(screens, option);
export default productNavigation;
