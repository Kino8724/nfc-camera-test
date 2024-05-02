// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NfcTestScreen from './screens/NfcTestScreen';
import CameraTestScreen from './screens/CameraTestScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NFC Test" component={NfcTestScreen} />
        <Stack.Screen name="Camera Test" component={CameraTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
