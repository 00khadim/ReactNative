

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import Todo from './Components/Todo';
import Contact from './Components/Contact';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }} />
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{ title: "Todo" }} />
          <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Contact" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
