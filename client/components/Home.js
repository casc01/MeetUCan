import { NavigationContainer } from '@react-navigation/native';
import Meeting from './Meeting';

import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';



const HomePage = ({navigation}) => {
    const handlePress = () => false
    return (

        <View>
            <Text
                style={{ textAlign: "center", fontSize: 60, marginTop: 90, color: '#468DC6', fontFamily: "Courier-Bold" }}
            >MeetUcan</Text>

            <Image
                source={require('./ToucanFinal.png')}
                style={{
                    resizeMode: 'contain',
                    width: 415,
                }}
            />
            <Text
                style={{ textAlign: "center", marginBottom: 25, color: '#006AFF', fontFamily: "Courier-Bold" }}>You can meet with MeetUcan!</Text>
            <View style={styles.text}>
                <TouchableOpacity>
                    <Button
                        onPress={() => navigation.navigate('Meeting')}
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
        marginBottom: 50,
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa'


    },
    text2: {
        marginBottom: 100,
        borderWidth: 2.5,
        padding: 12,
        borderRadius: 19,
        borderColor: 'black',
        backgroundColor: '#f5fffa',


    }


})
