import React, { useState, Component, newState } from 'react';
import { Image,View, Text, StyleSheet, useWindowDimensions, TextInput,TouchableOpacity, Alert } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';
import { Button } from '@react-navigation/elements';
import EmployeeUp from '../components/EmployeeUp';
import TableData from '../components/TableData';
import PinchableBox from '../Scale';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97',alignItem: 'center' },
  text: { margin: 6, textAlign: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1', height: 40, alignItem: 'center' },
  btn: { width: 58, height: 18,   borderRadius: 2 }
});



export default class Employee extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHead: ['产品型号', '质量要求', '计划数量', '实际数量', '工价'],
			tableData: [
				[{name: 'G2-60'}, {qr: ''}, {num: '200'}, {act: ''}, {pri: '0.2'}],
				[{name: 'G1-60'}, {qr: ''}, {num: '20'}, {act: ''}, {pri: '0.8'}],
				[{name: 'G2-80'}, {qr: ''}, {num: '70'}, {act: ''}, {pri: '1.5'}],
				[{name: 'GQA-60'}, {qr: ''}, {num: '50'}, {act: ''}, {pri: '2.5'}],
				[{name: 'GQA-70'}, {qr: ''}, {num: '10'}, {act: ''}, {pri: '0.6'}],
				[{name: 'G2-70'}, {qr: ''}, {num: '2'}, {act: ''}, {pri: '1'}],
				],
			anData: [
				[{name: ''}, {qr: ''}, {num: ''}, {act: ''}, {pri: ''}],
				]
		}
	}

	onChangeText(text, index) {
		const newData = [...this.state.tableData];
		newData[index].map((items, key) => (
				items.act = text	
			))
		this.setState({tableData: newData});   
	}

	render() {
		const state = this.state;
		const element = (data, index) => (
			<TextInput 
					key={index}
					value={data}
					onChangeText={(text)=>this.onChangeText(text, index)} />
			);

		function handleAdd() {
			return <View><Text>The New One</Text></View>
		}
		let date: Date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		
	return (
		<SafeAreaView>
						<EmployeeUp />
						<Text style={{
							marginLeft:10,
							fontSize: 18}}>{year}/{month}/{day} 布产单</Text>
						<View style={{width: '100%', marginTop: 10, height: 400}}>
							<PinchableBox />
						</View>
		</SafeAreaView>
		);

	}
}

