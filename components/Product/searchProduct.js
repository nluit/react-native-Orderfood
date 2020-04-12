import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  FlatList,
  Dimensions,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { productStyles } from "./product.css";
import React, { Component } from "react";

class searchProduct extends Component {
  render() {
    return (
      <View style={productStyles.header}>
        <View>
          <Icon
            name={"ios-search"}
            size={25}
            color="rgba(255,255,255,0.7)"
            style={productStyles.icon}
          />
          <TextInput placeholder="Search..." style={productStyles.search} />
        </View>
        <View style={productStyles.shoppingCart}>
          <Text style={{ color: "black", fontSize: 8 }}>
            {this.props.cart.length}
          </Text>
        </View>

        <TouchableHighlight
          style={{ marginRight: 10 }}
          underlayColor={"tomato"}
          onPress={()=>{
            console.log(this.props.cart)
          }}
        >
          <Image
            style={{ width: 28, height: 28 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png",
            }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default searchProduct;
