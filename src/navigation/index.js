import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../assets/colors/theme_colors'


//Screens
import Login from '../screens/Login'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: COLORS.SECONDARY,
        
      }}>
      <Tab.Screen
        name="Calendar"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Foundation name="calendar" size={30} color={COLORS.SECONDARY} />;
            } else if (focused == false) {
              return <Foundation name="calendar" size={30} color={COLORS.ICON_UNSELECTED} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="List"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Foundation name="clipboard-notes" size={30} color={COLORS.SECONDARY} />;
            } else if (focused == false) {
              return <Foundation name="clipboard-notes" size={30} color={COLORS.ICON_UNSELECTED} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <FontAwesome5 name="user-alt" size={25} color={COLORS.SECONDARY} />;
            } else if (focused == false) {
              return <FontAwesome5 name="user-alt" size={25} color={COLORS.ICON_UNSELECTED} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppHome" component={AppHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;