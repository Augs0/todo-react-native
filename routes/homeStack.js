import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import About from '../screens/about';

const Stack = createNativeStackNavigator();

export default function homeStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ title: 'Todo List' }}
      />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
}
