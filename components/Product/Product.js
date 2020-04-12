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
import { productStyles } from "./product.css";
import React, { Component } from "react";
const { width: WIDTH } = Dimensions.get("window");
import AddTocartContainer from '../../containers/addTocartContainer';
import SearchProductContainer from '../../containers/listProductCoontainer';
import Header from '../header/header'

export default class Product extends Component { 
  constructor(props){
    super(props);
    this.state ={
      refreshing : false
    }
  }
  componentDidMount(){
    this.setState({ refreshing:true });
    try {
      this.props.onFetchProduct();
      this.setState({ refreshing:false });
      console.log(this.props.dataProducts);
    } catch (error) {
      this.setState({ refreshing:false });
    }
    
  }
  render(){    
    return (
      <ImageBackground
        source={{
          uri:
            "https://media.istockphoto.com/photos/texture-dark-concrete-floor-picture-id621925576?k=6&m=621925576&s=612x612&w=0&h=H4rph08J2vSJz_crupTLvHf5OKW0olvoRJzaAK37Yhg=",
        }}
        style={productStyles.container}
      >
        <Header {...this.props}/>
        <SearchProductContainer></SearchProductContainer>
        <FlatList
          data={this.props.dataProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return( <AddTocartContainer item={item} index={index}></AddTocartContainer>);
          }}
          refreshControl={<RefreshControl refreshing={this.state.refreshing}/>}
        ></FlatList>
      </ImageBackground>
    );
  }
  
}
