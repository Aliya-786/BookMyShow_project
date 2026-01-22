import { View, Text, Image } from "react";
import React from 'react'
import bookshowlogo from "../assets/bookshowlogo.png";

const Splash = () => {
  return (
    <View style={{flex:1,backgroundColor:useColorScheme.primary}}>
        <img src={bookshowlogo} alt="book show logo" />
    </View>
  )
}

export default Splash;