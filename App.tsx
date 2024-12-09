import React, {Component} from 'react';
import {Dimensions, View, Text, Model, TouchableOpacity, Alert} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createAppContainer} from 'react-navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
// import StackNavigation from './src/StackNavigatorComponent'
import RootDrawer from './src/apis/testRoute';
import { store } from './src/app/store';
import { Provider } from 'react-redux'



export default class App extends Component {
    render() {
        return (
            <GestureHandlerRootView>
           <Provider store={store}>
               <NavigationContainer>
                    <RootDrawer />
                </NavigationContainer>
           </Provider>
           </GestureHandlerRootView>
        );
        }
    }

