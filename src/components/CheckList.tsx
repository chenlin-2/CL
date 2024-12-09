import React, { useEffect,useState, useCallback, Component, newState } from 'react';
import { SectionList,Image,TouchableHighlight,View, Text, useWindowDimensions, Modal, TextInput,TouchableOpacity, Alert, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell, Cols, Col, Rows } from 'react-native-reanimated-table';
import { Button } from '@react-navigation/elements';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import TreeSelect from 'react-native-tree-select';
import TData from '../data/TableData.json';
import Tree from '../data/TreeData.json';
import MyTextInput from '../Fix.tsx';

export default class CheckList extends Component{
	constructor(props) {
		super(props);
		this.state = {
      tableHead: ['类型','货号','型号','材质','规格','花面','单位','售价','价格2','成本','长度','宽度','高度','花面号','颜色'],
      isVisible: false,
      tableData: TData.tableData,
      perTable: TData.person,
      person:{
        employee: '',
        name: '',
        note: '',
        num: '',
        actl: '',
        qc: '',
        bad: '',
        pri: '',
        invent: ''
      },
      PerHead: ['部门','编号','姓名'],
      isPerVisible: false,
      ticketT: TData.ticketTable
    
		};
    this.input = React.createRef();
	}


   
handleSelection = ({item, routes, currentNode}) => {
        if(item.id === 'A'){
        this.setState({
          isVisible: !this.state.isVisible,
          isPerVisible: false
        })
      }
      if(item.id === 'B'){
        this.setState({
          isPerVisible: !this.state.isPerVisible,
          isVisible: false
        })
      }
      
      if(item.id !== 'A'){
        let tData = TData.tableData.filter(good => good.type===item.name);
        this.setState({
            tableData: tData
          })
      }
  }

handleAddTk = () => {
  this.setState([
    ...this.state.ticketT,
    this.state.person
    ])
  this.setState({
    refresh: 'refresh'
  })

  console.log(this.state.ticketT);
}
handleDeal = (data) => {
  const t = data.user
  if(t !== undefined){
    
    if(this.refs.input1.isFocused()){
      this.setState({
        person: {
          ...this.state.person,
          employee:t
        }
      })
    }
    if(this.refs.input5.isFocused()){
      this.setState({
        person: {
          ...this.state.person,
          qc:t
        }
      })
    }
  }else{
    let p = data.Gname;
    if(this.refs.input2.isFocused()){
      this.setState({
      person: {
        ...this.state.person,
        name: p
      }
    })
    }
    if(this.refs.input3.isFocused()){
      this.setState({
      person: {
        ...this.state.person,
        note: p
      }
    })
    }
    if(this.refs.input4.isFocused()){
      this.setState({
      person: {
        ...this.state.person,
        num: p
      }
    })
    }
  }
}



	render() {
    
		return (
			<View style={{backgroundColor: '#fff'}}>
				<View
				style={{
					backgroundColor: 'skyblue',
					height: 120,
				}}
				>
                <View style={{flexDirection: "row", width: 500, marginTop: 25, marginLeft: 15}}>
                 <TextInput
                 ref="input1"
                style={{ 
                  width: 150, 
                  height:30,
                  padding: 5,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  paddingLeft: 10,
                  fontSize:14,
                  borderStyle: 'dotted'}}
                  value={this.state.person.employee}
                  placeholder="员工名"
                  onChangeText={text => {
                    this.setState({
                      person: {
                        ...this.state.person,
                        employee: text
                      },
                      isPerVisible: true,
                      perTable: TData.person.filter(per => per.user.indexOf(text) > -1),
                      isVisible: false,
                    })
                  }} />
                <TextInput
                  ref="input2"
                  style={{
                    marginLeft: 10,
                    width: 150, 
                    height:30, 
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingLeft: 10,
                    padding: 5,
                    fontSize:14,
                    borderStyle: 'dotted'}} 
                    placeholder="产品名称" 
                    value={this.state.person.name}
                    onChangeText={text => {
                      this.setState({
                        person: {
                          ...this.state.person,
                        name: text
                        },
                        isVisible: true,
                        tableData: TData.tableData.filter(good => good.Gname.indexOf(text) > -1),
                        isPerVisible: false
                      })
                    }} /> 
                    <TextInput
                      ref="input3"
                  style={{
                    marginLeft: 10,
                    width: 150, 
                    height:30, 
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingLeft: 10,
                    padding: 5,
                    fontSize:14,
                    borderStyle: 'dotted'}} 
                    placeholder="备注" 
                    value={this.state.person.note}
                    onChangeText={text => {
                      this.setState({
                        person: {
                          ...this.state.person,
                        note: text
                        },
                        isVisible: false,
                        isPerVisible: false
                      })
                    }}/>
                    <TextInput
                    ref="input4"
                  style={{
                    marginLeft: 10,
                    width: 150, 
                    height:30, 
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingLeft: 10,
                    padding: 5,
                    fontSize:14,
                    borderStyle: 'dotted'}} 
                    placeholder="计划数量"
                    value={this.state.person.num} 
                    onChangeText={text => {
                      this.setState({
                        person: {
                          ...this.state.person,
                        num: text
                      },
                        isVisible: false,
                        isPerVisible: false
                      })
                    }}/>
                    <TextInput
                    ref="input5"
                  style={{
                    marginLeft: 10,
                    width: 150, 
                    height:30, 
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    paddingLeft: 10,
                    padding: 5,
                    fontSize:14,
                    borderStyle: 'dotted'}} 
                    placeholder="质检姓名"
                    value={this.state.person.qc} 
                    onChangeText={text => {
                    this.setState({
                      person: {
                        ...this.state.person,
                        qc: text
                      },
                      isVisible: false,
                      perTable: TData.person.filter(per => per.user.indexOf(text) > -1),
                      isPerVisible: true
                    })
                    }}/>
               <TouchableOpacity
                style={{
                  width: 50,
                  marginLeft: 10,
                  backgroundColor: '#fff',
                  height:30, 
                  padding: 5}}
                onPress={() => this.handleAddTk()}>
                  <Text style={{fontSize:14, textAlign: 'center'}}>确认</Text>
                </TouchableOpacity>
                </View>
				</View>
				<View style={{flexDirection: 'row' }}>
					<View
					style={{
						backgroundColor: 'lightgreen',
						height: 600,
						width: 150,
            borderWidth: 1
					}}
					>
					<TreeSelect
						data={Tree.treeData}
						defaultSelectedId={['B062']}
						isShowTreeId={false}
						selectType="multiple"
						itemStyle={{
							fontSize:12,
							color: '#995962'
						}}
						selectedItemStyle={{
							backgroundColor: '#f7edca',
							fontSize: 16,
							color: '#171e99'
						}}
						onClick={this.handleSelection}
						onClickLeaf={this._onClickLeaf}
						treeNodeStyle={{
							openIcon: <Image
							resizeMode="stretch"
							style={{width: 15, height: 15}}
							source={require('../images/down.png')} />,
							closeIcon: <Image
							resizeMode="stretch"
							style={{width:15, height: 15}}
							source={require('../images/right.png')} />
						}}
						/>
					</View>
					{this.state.isVisible && <View style={{flex: 1}}>
          <ScrollView
            style={{flex: 1}}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row 
                  data={this.state.tableHead} 
                  textStyle={{textAlign: 'center'}} 
                  style={{height: 40}} />
                  {this.state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={{flexDirection: 'row'}}>
                   <TouchableOpacity onPress={()=>this.handleDeal(rowData)} style={{height: '100%', width: '100%'}} >
                    <Row 
                      data={Object.values(rowData)} 
                      borderStyle={{borderWidth: 1}}
                      flexArr={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
                      textStyle={{textAlign: 'center'}}
                      style={{height: 70, width: '100%'}}/>
                  </TouchableOpacity>
                  </TableWrapper>
                  ))}
                </Table>
              </ScrollView>       
            </View>}
            {this.state.isPerVisible && <View style={{flex: 1}}>
              <ScrollView
            style={{flex: 1}}
            keyboardShouldPersistTaps={'handled'}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row 
                  data={this.state.PerHead} 
                  textStyle={{textAlign: 'center'}} 
                  style={{height: 40}} />
                  {this.state.perTable.map((rowData, index) => (
                  <TableWrapper style={{flexDirection: 'row'}} >
                  <TouchableOpacity onPress={()=>this.handleDeal(rowData)} style={{height: '100%', width: '100%'}} >
                    <Row
                      data={Object.values(rowData)}
                      flexArr={[1,1,1]}
                      textStyle={{textAlign: 'center'}}
                      borderStyle={{borderWidth: 1}}
                      style={{height: 70, width: '100%'}}/>
                  </TouchableOpacity>
                  </TableWrapper>
                  ))}
                </Table>
              </ScrollView> 
            </View>}
				</View>
			</View>
			);
	}
}