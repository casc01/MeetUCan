import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import DateTime from './MeetingSecond';
 
const AddMeeting = ({route, navigation}) => {
    const { pollName } = route.params;
        
        return (
            <View style={styles.MainContainer} >
                <Text
                    style={styles.text1}>Meetings:</Text>
                    
                <View style={styles.text2}>
                    <TouchableOpacity>
                        <Button
                            title="Create Meeting"
                            color="#007AFF"
                            onPress={() => navigation.navigate('DateTime')}
                            
                        />
                    </TouchableOpacity>
                </View>

                <Text
                    style={styles.text1}>Existing Meetings:</Text>
                
                <View style={styles.text3}>
                    <TouchableOpacity>
                        <Button
                            title="Add People"
                            color="#007AFF"
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        
        )
        
    

}
export default AddMeeting;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontFamily: "Courier-Bold",
        marginBottom: 50,
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa'


    },
    
    text1:{
        textAlign: "left", 
        fontSize: 30, 
        marginTop: 30, 
        color: '#468DC6', 
        fontFamily: "Courier-Bold" 

    },
    text2: {
        marginBottom: 100,
        marginTop: 50,
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa'

    },
    text3: {
        marginTop: 300,
        marginLeft: 120,
        borderWidth: 2.5,
        padding: 7,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa'


    }
    


})
