import { NavigationContainer } from "@react-navigation/native";
import Meeting from "./Meeting";
import React from "react";
import {useState} from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
//import React, { useState } from 'react';

const People = ({ navigation }) => {
    const [people, setPeople] = useState([]);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  handleChange(event); {
    this.setState({value: event.target.value});
  }

  handleSubmit(event); {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    //const [people, setPeople] = useState(null);
    return (
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 60,
            marginTop: '10%',
            color: "#468DC6",
            fontFamily: "Courier-Bold",
          }}
        >
          Add Members
        </Text>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <Text
          style={{
            textAlign: "left",
            fontSize: 30,
            marginTop: '10%',
            color: "#468DC6",
            fontFamily: "Courier-Bold",
          }}
        >
          
        </Text>
      </View>
    );
        
}
export default People;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textBox1: {
    marginTop: '10%',
    height: 50,
    width: 280,
    left: 70,
    backgroundColor: "white",
    textAlign: "center",
    right: 20,
    borderWidth: 3,
  },
  text: {
    fontFamily: "Courier-Bold",
    marginTop: '8%',
    borderWidth: 2.5,
    padding: 12,
    borderRadius: 19,
    borderColor: "black",
    backgroundColor: "#f5fffa",
  },
});
