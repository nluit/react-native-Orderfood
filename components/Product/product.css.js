import React from "react";
const { width: WIDTH } = Dimensions.get("window");

import { StyleSheet, Dimensions } from "react-native";
const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    marginTop: 0,
    height: 50,
    flexDirection: "row",
    // justifyContent:'flex-end',
    backgroundColor: "deepskyblue",
    alignItems: "center",
  },
  component: {
    textAlign: "center",
    color: "white",
    alignItems: "center",
  },
  productName: {
    color: "darkslategrey",
    fontSize: 13,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  productDesc: {
    color: "darkslategrey",
    fontSize: 12,
    marginLeft: 5,
  },
  icon: {
    position: "absolute",
    top: 5,
    left: 10,
    color: "#fff",
  },
  search: {
    justifyContent: "flex-start",
    marginLeft: 5,
    width: WIDTH - 55,
    height: 35,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 12,
    borderWidth: 1,
    paddingLeft: 30,
    borderColor: "white",
  },
  shoppingCart: {
    position: "absolute",
    zIndex: 1,
    right: 20,
    borderRadius: 50,
    backgroundColor: "white",
    width: 15,
    height: 15,
    textAlign: "center",
    alignItems: "center",
  },
});
export { productStyles };
