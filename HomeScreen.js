import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList
} from "react-native";

export default class HomeScreen extends React.Component {
  state = {
    text: ""
  };

  _onPressButton() {
    Alert.alert("Kamu klik ini ya");
  }

  constructor(props){
    super(props);
    this.state={}
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
      })
    }).catch((eror) =>{
      console.log(eror);
    })

  }

  static navigationOptions = {
      title: "Welcome"
  };

  render() {
    const { text } = this.state;
    let pic = {
      uri: "https://source.unsplash.com/daily"
    };
    const { navigate } = this.props.navigation;
    return (
      <View>
    <Button title="Profile" onPress={() => navigate("Profile")} />
      <FlatList data={this.state.dataSource} renderItem={({item}) => <Text style={{fontSize:20, padding: 10}}>{item.body}</Text>} 
      keyExtractor={({id}, index) => id.toString()}
      />
      
      {/* <SectionList sections={[
        {title: 'D', data:['Delon', 'Devindo']},
        {title: 'F', data:['Fiaz', 'Fanda', 'Fredy']}
      ]} 
      keyExtractor={(item, index) => index}
      renderItem={({item})=> <Text>{item}</Text>}
      renderSectionHeader={({section}) => <Text>{section.title}</Text>} /> */}
      </View>
    );
  }
}

class Nama extends Component {
  render() {
    return <Text> Hallo {this.props.name} </Text>;
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
