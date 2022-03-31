/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen () {
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App  ()  {
  
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}




export default App;
