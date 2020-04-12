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
import { styles } from "./css";
import Header from '../header/header'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  pressHandler = async () => {
    const { email, password } = this.state;
   
    if (!email.length || !password.length) {
      alert("Email or Password is not null ");
      return;
    } else {
      this.props.onPostLogin({ email: email, password: password });
      
    }
    let rs =  this.props.users;
      if (rs.status === 200)
        this.props.navigation.navigate("Product");
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            "https://media.istockphoto.com/photos/texture-dark-concrete-floor-picture-id621925576?k=6&m=621925576&s=612x612&w=0&h=H4rph08J2vSJz_crupTLvHf5OKW0olvoRJzaAK37Yhg=",
        }}
        style={styles.container}
      >        
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri:
                "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            }}
            style={styles.logo}
          />
          {/* <Text style={styles.logoText}>LOGIN</Text> */}
        </View>
        <View style={{ marginTop: 15 }}>
          <Icon
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.icon}
          />
          <TextInput
            style={styles.username}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.icon}
          />
          <TextInput
            style={styles.password}
            placeholder="Password"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />
        </View>
        <TouchableOpacity onPress={this.pressHandler } style={styles.btnLogin}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{ color: "white", marginTop: 20 }}>
          <TouchableOpacity>
            <Text>Don't have account? Sign up? </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
