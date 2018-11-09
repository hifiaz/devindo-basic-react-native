import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state ={
    text: ''
  }

  _onPressButton(){
    Alert.alert('Kamu klik ini ya');
  }

  render() {
    const {text} = this.state;
    let pic={
      uri: 'https://source.unsplash.com/daily'
    }
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <Button color="#fff" onPress={() => {Alert.alert('Hello');}} title="Press Me!"/>
        </View>
        <View style={styles.buttonContainer}>
        <Button color="#fff" onPress={this._onPressButton} title="Press Me!"/>
        </View>
        <TouchableOpacity onPress={this._onPressButton}>
          <View>
             <Text>Text</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class Nama extends Component{
  render(){
    return(
      <Text> Hallo {this.props.name} </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    padding: 20,
    backgroundColor: '#841584'
  },
  warna: {
    color: 'red',
    fontSize: 30
  }
});
