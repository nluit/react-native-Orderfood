import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { productStyles } from "./product.css";
import React, { Component } from "react";
const showAlert = () => {
  Alert.alert("Add to cart successful");
};
class ListProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "lemonchiffon",
          }}
        >
          <Image
            source={{ uri: `http://bakeryapi.devfast.net/${this.props.item.image}` }}
            style={{ width: 60, height: 60, margin: 5 }}
          />
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={productStyles.productName}>
              {this.props.item.name_product}
            </Text>
            <Text style={productStyles.productDesc}>
              {this.props.item.price} |{" "}
              <Text
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
              >
                {this.props.item.price }
              </Text>
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={showAlert}>
              <Image
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={{
                  uri:
                    "https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.onclickAdd(JSON.stringify(this.props.item));
              }}
            >
              <Image
                style={{ width: 35, height: 35, marginRight: 30 }}
                source={{
                  uri: "https://www.freeiconspng.com/uploads/cart-icon-9.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "white" }}></View>
      </View>
    );
  }
}
export default ListProduct;
