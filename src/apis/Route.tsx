import React, { useState, Component } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation'
import { Image,View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import Login from '../pages/Login';
import Employee from '../pages/Employee';
import Manager from '../pages/Manager';
import {Inventory} from '../pages/Inventory';
import {CKTicket} from '../pages/CKTicket';
import {ZWTicket} from '../pages/ZWTicket';
import {RJTicket} from '../pages/RJTicket';
import {DGTicket} from '../pages/DGTicket';
import {TJTicket} from '../pages/TJTicket';
import {JMTicket} from '../pages/JMTicket';
import {HJTicket} from '../pages/HJTicket';
import {ZGZZTicket} from '../pages/ZGZZTicket';
import {ZGBZTicket} from '../pages/ZGBZTicket';
import {JGZZTicket} from '../pages/JGZZTicket';
import {JGBZTicket} from '../pages/JGBZTicket';
import MDrawer from './MDrawer';
import EDrawer from './EDrawer';





const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// export default function RootDrawer() {
// 	return (
// 		<Drawer.Navigator
// 		initialRouteName="Login"
// 		headerMode="none"
// 		mode="modal"
// 		>
// 			<Drawer.Screen name='Login' 
// 			component={Login}
// 			options={{
// 				title: 'login',
// 				headerTitleAlign: 'center'
// 			}}/>
// 			<Drawer.Screen name='MDrawer' 
// 			component={MDrawer}
// 			// options={{
// 			// 	drawerItemStyle: {height: 0}
// 			// }} 
// 			/>
// 			<Drawer.Screen 
// 			name='EDrawer' 
// 			component={EDrawer}
// 			// options={{
// 			// 	drawerItemStyle: {height: 0}
// 			// }}
// 			 />
// 		</Drawer.Navigator>
// 		);
// }

export default function RouteDrawer() {
	return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="employee" component={EDrawer} />
    </Stack.Navigator>
  );
}


