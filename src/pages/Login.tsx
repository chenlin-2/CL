import React, { useState, Component, newState, useReducer } from 'react';
import { Image,View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm'





const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontfamliy: 'Cochin',
  },
  titleText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',

  },
  box2: {

    alignItems: 'center',
    backgroundColor: '#fff'
  }


});
export default function Login() {
      return (
          <SafeAreaProvider>
            <SafeAreaView
            style={{width:useWindowDimensions().width, 
            height:useWindowDimensions().height, 
            justifyContent: 'center', 
            alignItems: 'center'}}>
              <View 
              style={{width:'100%',
            height:useWindowDimensions().height > 700 ? '60%' : '100%',
            alignItems: 'center',
          }}>
              <Image 
                    style={{
                      width: useWindowDimensions().width > 700 ? 80 : 60,
                      height: useWindowDimensions().width > 400 ? 80 : 60,
                      marginBottom: 25,
                      resizeMode:'contain'
                    }}
                    source={require('../images/logo.png')} />
                  <LoginForm />
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
      );
          }