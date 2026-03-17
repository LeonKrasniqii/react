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
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={({ navigation }) => ({
          headerTitle: 'APP',
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'black' , borderRadius: 10 ,shadowRadius: 15 ,shadowColor: 'cyan',padding: 5, cursor: 'pointer', }}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Box')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>Box</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Post')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>Post</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Todo')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>Todo</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => navigation.navigate('User')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>User</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('List')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>List</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Students')}
                style={{ marginHorizontal: 5 }}
              >
                <Text style={{ color: 'blue' }}>Students</Text>
              </TouchableOpacity>

            </View>
          ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}