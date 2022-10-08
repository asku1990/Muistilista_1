
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';


export default function App() {


  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{title: 'LoginScreen'}}
          />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'HomeScreen'}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
 
   
  );
}