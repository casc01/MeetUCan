import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PollName from './PollName';
import { NavigationContainer } from "@react-navigation/native";
import People from './People';

//do dropwdown for meetings akready created
const Meeting = ({route, navigation}) => {
    const { pollName } = route.params;
    console.log(pollName)
  const [selectedValue, setSelectedValue] = useState("jan");
  const [selectedValue2, setSelectedValue2] = useState("1");
  const [selectedValue3, setSelectedValue3] = useState("2020");
  return (
    <View style={styles.container}>
      <View style={styles.firstButton}>
        <TouchableOpacity>
          <Button
            title="Add New Meeting"
            color="#468DC6"
            onPress={() => navigation.navigate("Meeting", {
              value: [selectedValue, selectedValue2,selectedValue3],
            }
              )}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={[styles.text2]}>Meeting Title : </Text>
        <TextInput style={[styles.textBox1]}></TextInput>
      </View>
      <Picker
        selectedValue={selectedValue}
        style={[styles.picker]}
        itemStyle={styles.pickerItem}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Jan" value="jan" color="#468DC6" />
        <Picker.Item label="Feb" value="feb" color="#468DC6" />
        <Picker.Item label="Mar" value="mar" color="#468DC6" />
        <Picker.Item label="Apr" value="apr" color="#468DC6" />
        <Picker.Item label="Jun" value="jun" color="#468DC6" />
        <Picker.Item label="Jul" value="jul" color="#468DC6" />
        <Picker.Item label="Aug" value="aug" color="#468DC6" />
        <Picker.Item label="Sep" value="sep" color="#468DC6" />
      </Picker>
      <Picker
        selectedValue2={selectedValue2}
        style={[styles.onePicker]}
        itemStyle={styles.onePickerItem}
        onValueChange={(itemValue2, itemIndex2) =>
          setSelectedValue2(itemValue2)
        }
      >
        <Picker.Item label="1" value="one" color="#468DC6" />
        <Picker.Item label="2" value="two" color="#468DC6" />
        <Picker.Item label="3" value="three" color="#468DC6" />
        <Picker.Item label="4" value="four" color="#468DC6" />
        <Picker.Item label="5" value="five" color="#468DC6" />
        <Picker.Item label="6" value="six" color="#468DC6" />
        <Picker.Item label="7" value="seven" color="#468DC6" />
        <Picker.Item label="8" value="eight" color="#468DC6" />
        <Picker.Item label="9" value="eight" color="#468DC6" />
        <Picker.Item label="10" value="eight" color="#468DC6" />
        <Picker.Item label="11" value="eight" color="#468DC6" />
        <Picker.Item label="12" value="eight" color="#468DC6" />
        <Picker.Item label="13" value="eight" color="#468DC6" />
        <Picker.Item label="14" value="eight" color="#468DC6" />
        <Picker.Item label="15" value="eight" color="#468DC6" />
        <Picker.Item label="16" value="eight" color="#468DC6" />
        <Picker.Item label="17" value="eight" color="#468DC6" />
        <Picker.Item label="18" value="eight" color="#468DC6" />
        <Picker.Item label="19" value="eight" color="#468DC6" />
        <Picker.Item label="20" value="eight" color="#468DC6" />
        <Picker.Item label="21" value="eight" color="#468DC6" />
        <Picker.Item label="22" value="eight" color="#468DC6" />
        <Picker.Item label="23" value="eight" color="#468DC6" />
        <Picker.Item label="24" value="eight" color="#468DC6" />
        <Picker.Item label="25" value="eight" color="#468DC6" />
        <Picker.Item label="26" value="eight" color="#468DC6" />
        <Picker.Item label="27" value="eight" color="#468DC6" />
        <Picker.Item label="28" value="eight" color="#468DC6" />
        <Picker.Item label="29" value="eight" color="#468DC6" />
        <Picker.Item label="30" value="eight" color="#468DC6" />
        <Picker.Item label="31" value="eight" color="#468DC6" />
      </Picker>
      <Picker
        selectedValue3={selectedValue3}
        style={[styles.twoPickers]}
        itemStyle={styles.twoPickerItems}
        onValueChange={(itemValue3, itemIndex3) =>
          setSelectedValue3(itemValue3)
        }
      >
        <Picker.Item label="2021" value="2021" color="#468DC6" />
        <Picker.Item label="2020" value="2020" color="#468DC6" />
      </Picker>

      <View style={[styles.text]}>
        <TouchableOpacity>
          <Button
            title="Submit"
            onPress={() => navigation.navigate("People")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
//fix the dates part
const styles = StyleSheet.create({
  textBox1: {
    marginTop: "-20%",
    height: 40,
    width: 200,
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 2.5,
  },
  firstButton: {
    color: "#FFF0E0",
    backgroundColor: "white",
    textAlign: "center",
    right: 110,
    top: "-17%",
    borderWidth: 2.5,
  },
  text2: {
    marginTop: "-17%",
    width: 100,
  },
  text: {
    margin: 30,
    right: "-20%",
    borderWidth: 5,
    borderRadius: 12,
    backgroundColor: "white",
    fontFamily: "Courier",
    borderColor: "#A04052",
  },
  container: {
    top: "15%",
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    borderColor: "#A04052",
  },
  picker: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 0,
    borderColor: "#A04052",
    borderTopWidth: 10,
    borderWidth: 8,
  },
  pickerItem: {
    color: "blue",
  },
  onePicker: {
    marginTop: "2%",
    width: 300,
    backgroundColor: "white",
    borderColor: "#A04052",
    borderRadius: 0,
    borderWidth: 8,
  },
  onePickerItem: {
    height: 88,
    color: "blue",
  },
  twoPickers: {
    marginTop: "2%",
    width: 300,
    borderRadius: 0,
    height: 98,
    backgroundColor: "white",
    borderColor: "#A04052",
    borderBottomWidth: 10,
    borderWidth: 8,
  },
  twoPickerItems: {
    height: 88,
    color: "blue",
  },
});
export default Meeting;
