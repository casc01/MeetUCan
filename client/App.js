import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/Home';
import Meeting from './components/Meeting';
import { createStackNavigator } from '@react-navigation/stack';
import Poll from './components/PollName';
import People from './components/People';
import DateTime from './components/MeetingSecond';
import AddMeeting from "./components/MeetingFirstScreen";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Poll" component={Poll} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Meeting" component={Meeting} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="AddMeeting" component={AddMeeting} />
        <Stack.Screen name="DateTime" component={DateTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
