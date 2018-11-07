import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  state ={
    count: 0
  }
  render() {
    const {count} = this.state;
    let pic={
      uri: 'https://source.unsplash.com/daily'
    }
    return (
      <View style={styles.container}>
        {/* <View style={{height:100, width: 100, backgroundColor: 'skyblue'}}/>
        <View style={{height:200, width: 200, backgroundColor: 'steelblue'}}/> */}
        <View style={{flex: 1, height:100, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 2, height:100, backgroundColor: 'steelblue'}}/>
        <View style={{flex: 3, height:100, backgroundColor: 'skyblue'}}/>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  warna: {
    color: 'red',
    fontSize: 30
  }
});
