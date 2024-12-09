import React, { useState, Component, newState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import TicketTable from '../components/TicketTable';
import DeskHead from '../components/DeskHead'

export default function ZWTicket() {
	const ticketName = '折弯工序'
	return (
		<SafeAreaView>
			<DeskHead />
			<TicketTable ticketName={ticketName} />
		</SafeAreaView>
		);
}