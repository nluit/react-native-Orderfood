import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginContainer from "../containers/loginContainer";
import Login from '../components/Login/login';
import ProductContainer from "../containers/ProductContainer";

const screens = {
  Product: {
    screen: ProductContainer,
    headerShown: false,
  },
  Login: {
    screen: LoginContainer,
  },
  // Product: {
  //   screen: ProductContainer,
  //   headerShown: false,
  // },
};
const option = {
  defaultNavigationOptions: {
    headerShown: false,
  },
};
const Navigation = createStackNavigator(screens, option);
export default createAppContainer(Navigation);
