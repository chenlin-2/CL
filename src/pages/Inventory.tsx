import React, { useState, Component, newState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import CheckList from '../components/CheckList'

export default function Inventory() {
	return (
		<SafeAreaView>
			<CheckList />
		</SafeAreaView>
		);
}