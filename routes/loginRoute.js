import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import LoginContainer from "../containers/loginContainer";
const screens = {
  Login:{
    screen: LoginContainer,
},

  };
  const option = {
    defaultNavigationOptions: {
      headerShown: false,
    },
  };
  const LoginNavigation = createStackNavigator(screens, option);
  export default LoginNavigation;