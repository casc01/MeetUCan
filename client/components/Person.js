import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
 
const ListPeople = ({navigation}) => {
    //const { pollName } = route.params;
        
        return (
            <View style={styles.MainContainer} >
                <Text
                    style={styles.text1}>People:</Text>
                
            
            </View>
        
        )
        
    

}
export default ListPeople;

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
        marginLeft: 20, 
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
