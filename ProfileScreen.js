import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from "react-native";

export default class HomeScreen extends React.Component {



  render() {
    return (
      <ImageBackground source={{uri: "https://source.unsplash.com/daily"}} style={styles.container}>
      <View>
        <Text>Profile Screen</Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  buttonContainer: {
    padding: 20,
    margin: 10,
    backgroundColor: "#841584"
  },
  warna: {
    color: "red",
    fontSize: 30
  }
});
