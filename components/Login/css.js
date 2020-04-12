import React from "react";
const { width: WIDTH } = Dimensions.get("window");

import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null
  },
  logo: {
    width: 133,
    height: 150
  },
  logoContainer: {
    alignItems: "center"
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
    marginBottom: 15
  },
  username: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.35  )",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    borderWidth: 1,
    paddingLeft: 45
  },
  password: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.35  )",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    borderWidth: 1,
    paddingLeft: 45
  },
  icon: {
    position: "absolute",
    top: 7,
    left: 37
  },
  btnEye: {
    position: "absolute",
    top: 7,
    right: 0
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 15
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
export { styles };
