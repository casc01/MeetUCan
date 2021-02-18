
import { NavigationContainer } from "@react-navigation/native";
import Meeting from "./Meeting";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

var Poll = ({ navigation, route }) => {
    //fix the useState part - 
const [poll, setPoll] = useState("");
  const handlePress = () => false;
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
        Create Poll
      </Text>
      <View>
        <TextInput style={[styles.textBox1]} onChangeText={text => setPoll(text)}></TextInput>
      </View>
      <View style={styles.text}>
        <TouchableOpacity>
          <Button
            onPress={() => navigation.navigate("Meeting", {
                pollName: poll,
                
            }
            )}
            title="Submit"
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Poll;

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
    marginTop:'8%',
    borderWidth: 2.5,
    padding: 12,
    borderRadius: 19,
    borderColor: "black",
    backgroundColor: "#f5fffa",
  },
});
