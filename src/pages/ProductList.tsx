import React, { useState, Component, newState } from 'react';
import { Image,View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity, Alert } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import EmployeeUp from '../components/EmployeeUp'



export default function ProductList ({ navigation }){ 
		let date: Date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		return (
		<SafeAreaView style={{
			width: '100%',
			height: '100%'
		}}>
			<EmployeeUp />
			<TouchableOpacity
				style={{
					backgroundColor: '#fff',
					height: 60,
					justifyContent: 'center',
					padding: 10}}
				onPress={() => navigation.navigate('employee')}
				activeOpacity={0.7}

			>
				<Text style={{fontSize:20}}>{year}/{month}/{day} 布产单</Text>
			</TouchableOpacity>
		</SafeAreaView>
		);
		
}
