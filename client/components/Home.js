import { NavigationContainer } from '@react-navigation/native';
import Meeting from './Meeting';
import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import Poll from './PollName';



const HomePage = ({navigation}) => {
    const handlePress = () => false
    return (

        <View>
            <Image
                source={require('./ToucanFinal.png')}
                style={{
                    resizeMode: 'contain',
                    width: 415,
                    height: 220,
                }}
            />
            <Text
                style={{ textAlign: "center", marginBottom: '15%', color: '#006AFF', fontFamily: "Courier-Bold" }}>You can meet with MeetUcan!
            </Text>
            
            <View style = {styles.twoButtons}>
        <View>
        <TextInput style={[styles.textBox1]} onChangeText={null}></TextInput>
        </View>
        <View style = {styles.text} >
            <Button 
                onPress={() => navigation.navigate(null)} 
                title="Enter Passcode" />
        </View>

      </View>


            <Text
                style={{ textAlign: "center", marginBottom: '5%', color: '#006AFF', fontFamily: "Courier-Bold" }}>Or...
            </Text>        
            <View style={styles.text}>
                <TouchableOpacity>
                    <Button
                        onPress={() => navigation.navigate('Poll')}
                        title="Create New Poll"
                        color="#007AFF"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.text2}>
                <TouchableOpacity>
                    <Button
                        onPress={handlePress}
                        title="Existing Polls"
                        color="#007AFF"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

}
export default HomePage;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontFamily: "Courier-Bold",
        marginBottom: '3%',
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa'


    },
    text2: {
        marginBottom: '20%',
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa',


    },

    twoButtons: {
        flexDirection: "row",
        padding: 12
    },

    textBox1: {
        height: 50,
        width: 100,
        backgroundColor: "white",
        textAlign: "center",
        borderWidth: 3,
      }


})
