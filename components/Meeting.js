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
const Meeting = () => {
  const [selectedValue, setSelectedValue] = useState("jan");
  const [selectedValue2, setSelectedValue2] = useState("1");
  const [selectedValue3, setSelectedValue3] = useState("2020");
  return (
    <View style={styles.container}>
      <View style={styles.firstButton}>
        <TouchableOpacity>
          <Button title="Add New Meeting" color="#468DC6" />
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
      </Picker>
      <Picker
        selectedValue3={selectedValue3}
        style={[styles.twoPickers]}
        itemStyle={styles.twoPickerItems}
        onValueChange={(itemValue3, itemIndex3) =>
          setSelectedValue3(itemValue3)
        }
      >
        <Picker.Item label="2020" value="2020" color="#468DC6" />
        <Picker.Item label="2019" value="2019" color="#468DC6" />
      </Picker>

      <View style={[styles.text]}>
        <TouchableOpacity>
          <Button title="Submit" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
//fix the dates part
const styles = StyleSheet.create({
  textBox1: {
    marginTop:-40,
    marginBottom:30,
    height: 40,
    width: 200,
    left: -20,
    backgroundColor: "#FFF0E0",
    textAlign: "center",
    right: 20,
    borderWidth: 2.5,
  },
  firstButton: {
    marginLeft: 10,
    color: "#FFF0E0",
    backgroundColor: "#FFF0E0",
    textAlign: "center",
    right: 110,
    top: -105,
    borderWidth: 2.5,
  },
  text2: {
    marginTop: -28,
    width: 200,
    left: 45,
  },
  text: {
    margin: 30,
    top:40,
    right:-120,
    borderWidth: 5,
    borderRadius: 12,
    backgroundColor: "#FFF0E0",
    fontFamily: "Courier",
    borderColor: "#A04052",
  },
  container: {
    top: 140,
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    borderColor: "#A04052",
  },
  picker: {
    width: 300,
    backgroundColor: "#FFF0E0",
    borderRadius: 0,
    borderColor: "#A04052",
    borderTopWidth: 10,
    borderWidth: 8,
  },
  pickerItem: {
    color: "blue",
  },
  onePicker: {
    marginTop: 7,
    width: 300,
    backgroundColor: "#FFF0E0",
    borderColor: "#A04052",
    borderRadius: 0,
    borderWidth: 8,
  },
  onePickerItem: {
    height: 88,
    color: "blue",
  },
  twoPickers: {
    marginTop: 7,
    width: 300,
    borderRadius: 0,
    height: 88,
    backgroundColor: "#FFF0E0",
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
