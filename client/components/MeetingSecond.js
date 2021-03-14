import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = ({navigation}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View style = {styles.twoButtons}>
        <View style = {styles.text} >
            <Button 
                onPress={showDatepicker} 
                title="Click to pick date!" />
        </View>
        <View style = {styles.text} >
            <Button 
                onPress={showTimepicker} 
                title="Click to choose time!" />
        </View>

      </View>
      
      
      
      {show && (
        <DateTimePicker
          style = {styles.box}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display = "spinner"
          onChange={onChange}
        />
      )}
      
      <View style = {styles.createB} >
            <Button 
                onPress={false} 
                title="Create" />
        </View>
    <Text style = {styles.text1}>Meetings:</Text>
    </View>
  );
}
export default DateTime;

const styles = StyleSheet.create(
    {
        text: {
            fontFamily: "Courier-Bold",
            marginBottom: 50,
            borderWidth: 2.5,
            padding: 12,
            borderRadius: 19,
            borderColor: 'black',
            backgroundColor: '#f5fffa',
            width: 170,
            marginLeft: 10,
            marginRight: 10,
    
        },
    
        text1:{
            textAlign: "center", 
            fontSize: 40,  
            color: '#468DC6', 
            fontFamily: "Courier-Bold",
            marginBottom: 50, 
    
        },
        text2:{
            textAlign: "center", 
            fontSize: 50,  
            color: '#468DC6', 
            fontFamily: "Courier" 

    
        },
        text3:{
            fontSize: 20,
            color:"#007AFF"
        },
        button: {
            alignItems: "center",
            backgroundColor: '#f5fffa',
            padding: 20,
            justifyContent: 'center',
            marginLeft: 70,
            marginRight: 70,
            borderRadius: 19,
            borderWidth: 2.5,
            borderColor: 'black',
          },
        box: {
            marginLeft: -50,
            marginRight: -50,
        
        },

        twoButtons: {
            flexDirection: "row"
        },

        createB: {
            fontFamily: "Courier-Bold",
            marginBottom: 50,
            alignItems: 'center',
            borderWidth: 2.5,
            padding: 12,
            borderRadius: 19,
            borderColor: 'black',
            backgroundColor: '#f5fffa',
            marginLeft: 50,
            marginRight: 50,
        },
     
    });