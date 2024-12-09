import React, { useState, Component, newState } from 'react';
import { TouchableHighlight,View, Text, useWindowDimensions, Modal, TextInput,TouchableOpacity, Alert, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell, Cols, Col, Rows } from 'react-native-reanimated-table';
import { Button } from '@react-navigation/elements';
import { Formik, Field, Form, FormikHelpers } from 'formik';

export type Props = {
	tableHead: Array<string>
}

export type Values = {

	name: string,
	qr: string,
	num: number,
	act: number,
	pri: string
	}

export default class TableData extends Component<Props> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tableHead: ['产品型号','质量需求','计划数量','实际数量','工价'],
			tableData: [
				[{name: 'G1-50', qr: ' ', num: '500', actl: ' ', pri: '2.5'}],
				[{name: 'G2-60', qr: ' ', num: '50', actl: ' ', pri: '2'}],
				[{name: 'G2-80', qr: ' ', num: '100', actl: ' ', pri: '1.5'}],
				[{name: 'GQA-60', qr: ' ', num: '20', actl: ' ', pri: '0.4'}],
				[{name: 'GQA-70', qr: ' ', num: '10', actl: ' ', pri: '0.6'}],
				],
			modalVisible:false
		}

	}
	setModalVisible = (visible) => {
			this.setState({modalVisible: visible});
		}
	handleAdd = (values) => {
		let newData = [];
		newData.push(values);
		this.setState(prevState => ({
			tableData: [...this.state.tableData, newData]
		}))
		this.setState({
			refresh: 'refresh'
		})
		this.setModalVisible(!this.state.modalVisible)
	}

	handleChange = (text) => {
		console.log(text);
	}
	
	render() {
		const element = (data, index) => (
      	<TouchableOpacity onPress={() => this._alertIndex(index)}>
        	<View>
          		<TextInput 
          			style={{ 
                    backgroundColor: '#fff',
                    paddingLeft: 10,
                    padding: 5,
                    fontSize:14,
                    borderStyle: 'dotted'}} 
                    placeholder=""
                onChangeText={(text)=>this.handleChange(text)}
          		/>
        	</View>
      	</TouchableOpacity>
    	);
		const {modalVisible} = this.state;
		return (
		<View style={{height: '60%'}}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('modal has been closed');
				}}

			>
			<View style={{
				backgroundColor: 'skyblue',
				width: '100%',
				height: '100%',
				justifyContent: 'center'
			}}>
				<Formik
					initialValues={{
						name: '',
						qr: ' ',
						num: ' ',
						actl: '',
						pri: ' '
					}}
					onSubmit={values => this.handleAdd(values)}>
						{({handleChange,handleBlur, handleSubmit, values}) => (
							<View >
								<Text style={{
									textAlign: 'center',
									marginBottom: '5%',
									fontSize: 18
								}}>新增完成</Text>
								<TextInput
								style={{
									alignSelf:'center',
								width: '80%', 
                				heigth:useWindowDimensions().height > 700 ? '60%' : '30%',
                				padding: 10,
                				backgroundColor: '#fff',
                				borderRadius: 32,
                				paddingLeft: 25,
                				marginBottom: '5%',
                				fontSize:useWindowDimensions().width > 700 ? 24 : 20,
                				borderStyle: 'dotted'
								}}
								placeholder="请输入产品型号"
                				onChangeText={handleChange('name')} 
                				value={values.name} />
                				<TextInput
								style={{
									alignSelf:'center',
									width: '80%', 
                				heigth:useWindowDimensions().height > 700 ? '60%' : '30%',
                				padding: 10,
                				backgroundColor: '#fff',
                				borderRadius: 32,
                				paddingLeft: 25,
                				fontSize:useWindowDimensions().width > 700 ? 24 : 20,
                				borderStyle: 'dotted'
								}}
								placeholder="请输入完成数量"
                				onChangeText={handleChange('actl')} 
                				value={values.actl} />
                				<TouchableOpacity
                				style={{
                 				width: useWindowDimensions().width > 400 ? '80%' : '50%',
                  				marginTop: 25,
                  				borderRadius: 32,
                  				alignSelf: 'center',
                  				backgroundColor: 'skyblue',
                  				width: '80%', 
                  				alignItems: 'center',
                  				heigth:useWindowDimensions().height > 700 ? '60%' : '30%', 
                  				padding: 10}}
                				onPress={handleSubmit}
                  				>
                  			<Text
                  				style={{
                    			fontSize:useWindowDimensions().width > 700 ? 30 : 20
                  				}}>确认</Text>
                			</TouchableOpacity>
							</View>
							)}
					</Formik>
			</View>
				
			</Modal>
				<View style={{height: 350}}>
				<ScrollView>
				<Table
				style={{backgroundColor: '#fff', height: 400}}
				borderStyle={{borderWidth: 1}}
				textStyle={{textAlign: 'center'}}
				>
				<Row data={this.state.tableHead} 
					style={{height: 40}} 
					textStyle={{textAlign: 'center', fontSize: 16}}
					flexArr={[1,1,1,1,1]}/>
					{this.state.tableData.map((rowData, index) => (
						<TableWrapper key={index} style={{flexDirection: 'row',height: 40}}>
							<Cell data={rowData[0].name} />
							<Cell data={rowData[0].qr} />
							<Cell data={rowData[0].num} />
							<Cell data={element(rowData,index)} />
							<Cell data={rowData[0].pri} />
						</TableWrapper>
							))}
				</Table>
			</ScrollView>
			</View>
				<View style={{
					marginTop: -100,
					flexDirection: 'row', 
					height: '35%', 
					padding: '5%'
				}}>
					<TouchableOpacity
				style={{
					backgroundColor: 'lightgreen',
					width: '50%',
					height: '100%',
					justifyContent: 'center',
					borderRadius: 28,
					marginRight: '2%'
				}}
				onPress={() => {this.setModalVisible(true)}}
				>
					<Text style={{textAlign: 'center'}}>新增行</Text>
				</TouchableOpacity>
				<TouchableOpacity
				style={{
					backgroundColor: 'lightgreen',
					width: '50%',
					height: '100%',
					justifyContent: 'center',
					borderRadius: 28
				}}
				onPress={() => handleSave()}
				>
					<Text style={{textAlign: 'center'}}>保存</Text>
				</TouchableOpacity>
				</View>
			</View>
		);
	}
}