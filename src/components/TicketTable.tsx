import React, { useState, Component, newState } from 'react';
import { Image,Alert,View,StyleSheet, TouchableHighlight,Text,ScrollView, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Table, TableWrapper, Row, Cell, Cols, Col, Rows } from 'react-native-reanimated-table';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {Popup} from 'react-native-windows';
import Draggle from '../Draggle'
import TData from '../data/TableData.json'
import CheckList from '../components/CheckList';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

export type Ticket = {
	date: Date
	name: string
	note: string
	num: number
	actl: number
	pri: number
	qc: string
	bad: string
	invent: number
	employee: string
}


export default class TicketTable extends Component<Ticket> {
	constructor(props:Ticket) {
		super(props);
		this.state = {
			ticketName: this.props.ticketName,
			ticketHead: ['日期', '型号', '备注', '计划数量', '实际数量', '质检', '不良数量','工价','库存','分配员工'],
			ticketTable: TData.ticketTable,
			showPopup1: false

		}
	}

	_alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  };
  showPopup(isOpen) {
  	this.setState({showPopup1: isOpen});
  }

  handleDel = (index) => {
  	this.setState(state => {
  		state.ticketTable.splice(index, 1);
  		return {ticketTable: state.ticketTable};
  	})
  }

  handleChange = (text) => {
  	console.log('text', text);
  }

	render() {
		const {modalVisible} = this.state;
		let date: Date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let dat = year+'/'+month+'/'+day;
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
		return (
			<View style={{
				margin: 10,
				padding: 10,
				borderRadius: 28,
				backgroundColor: '#fff',
				borderWidth: 1,
				marginTop: 25
			}}>
      <Popup isOpen={this.state.showPopup1}>
          <View  style={{
            width: 1000,
            height: 800,
          backgroundColor: '#fff'}}>
            <TouchableHighlight style={{
              backgroundColor: '#fff',
              width: 30,
              height: 30,
              marginLeft: 970
            }}
                onPress={() => {this.showPopup(false)}}
                activeOpacity={0.2}>

              <Image 
          style={{
            width: 30,
                  height: 30,
                  resizeMode:'contain',
            }}
          source={require('../images/close.png')} />
            </TouchableHighlight>
            <CheckList /> 
          </View>
      </Popup>
				<View style={{
					padding: 10
				}}>
				<Text style={{
						textAlign: 'center',
						fontSize: 18
					}}>{this.state.ticketName}表</Text>
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity 
						onPress={() => {this.showPopup(true)} }
						activeOpacity={0.3}>
						<Text style={{ fontSize: 15}}>添加{this.state.ticketName}布产</Text>
					</TouchableOpacity>
					<View style={{flexDirection: 'row', marginLeft: '80%', marginBottom: 10}}>
					<TouchableOpacity 
					onPress={()=>{handleSave()}}
					>
						<Text style={{fontSize: 16, color: 'blue'}}>保存</Text>
					</TouchableOpacity>
					<TouchableOpacity 
					onPress={()=>this.handleBack()}
					style={{marginLeft: 10}}>
						<Text style={{fontSize: 16, color: 'blue'}}>退出</Text>
					</TouchableOpacity>
				</View>
				</View>			
					<Table
					style={{backgroundColor: '#fff'}}
					borderStyle={{borderWidth: 1}}
					>
						<Row 
						data={this.state.ticketHead}
						textStyle={{textAlign: 'center'}} 
						style={{height: 40}}/>
						{
            				this.state.ticketTable.map((rowData, index) => (
            					<TouchableOpacity onPress={() => Alert.alert(
            						"Hi",
   											"确认删除这一行？",
   										[
   											{
         								text: "取消",
         								onPress: () => console.log("Cancel Pressed"),
         								style: "cancel"
      									},
      									{
         								text: "确认",
         								onPress: () => this.handleDel(index),
      									},
      									
   										],
   											{ cancelable: false }
  											)
            						}>
              				<TableWrapper key={index} style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
                			<Col data={[dat]} style={{width: '10%',height: 30}} textStyle={{textAlign: 'center'}}/>
                			{Object.values(rowData).map((cellData,cellIndex) => (
                					<Cell
                						key={cellIndex}
                						data={cellData === "" ? element(cellData,cellIndex) : cellData} 
                						style={{width: '10%', height: 30}} textStyle={{textAlign: 'center'}}/>
                				))}
                			
              				</TableWrapper>
              				</TouchableOpacity>
            			))
          				}
					</Table>
					
				</View>
			</View>
			);
	}
}



