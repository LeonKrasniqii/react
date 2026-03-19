import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import StudentsScreen from './screens/StudentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BoxScreen from './screens/BoxScreen';
import PostsScreen from './screens/PostsScreen';
import UserScreen from './screens/UserScreen';
import TodoScreen from './screens/TodoScreen';
import CountriesScreen from './screens/CountriesScreen';
import ShopScreen from './screens/ShopScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={({ navigation }) => ({
          headerTitle: 'APP',
         
        })}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Post" component={PostsScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}