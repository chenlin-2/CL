import React, { useState, Component, newState } from 'react';
import { Image,View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import List from '../data/result.json'
import DeskHead from '../components/DeskHead'

export default function Manager ({navigation}) {
		return (
		<SafeAreaView>
		<DeskHead />		
		<View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 50}}>

			{List.mRouteList.map((item,index) => (
				<View style={{ 
				width: 300, 
				height: 100, 
				margin: 10,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#fff',
				borderRadius: 25,
				borderWidth: 1}}>
				
				<TouchableOpacity key={index} onPress={() => navigation.navigate(item.route)}>
				<Text  style={{fontSize: 20}}>{item.name}</Text>
				</TouchableOpacity>
				</View>
				))}
		</View>
		</SafeAreaView>
		);
}