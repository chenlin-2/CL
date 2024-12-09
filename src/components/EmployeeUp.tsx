import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image } from 'react-native';


export type Employee = {
	position: string
	name: string
}

export default class EmployeeUp extends Component<Employee> {
	constructor(props: Employee) {
		super(props)
		this.state = {
			position: props.position || '1111',
			name: props.name || 'zzzz'
		}
	}
	render() {
		return (
			<>
				<View style={styles.container}>
					<View style={styles.box1}>
						<Image 
							style={{
								width: 90,
          						height: 90,
          						resizeMode:'contain'
								}}
							source={require('../images/logo.png')} />
						<View style={{
								marginLeft: 10,
								paddingTop: 40,
								width: 100
							}}>
						<Text style={{fontSize: 16}}>岗位：{this.state.position}</Text>
						<Text style={{fontSize: 16}}>姓名：{this.state.name}</Text>
					</View>
					</View>
				</View>
				<View style={styles.box2}></View>
				
			</>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		padding:20,
		backgroundColor: 'skyblue',
		height: '30%'
	},
	box1: {
		marginTop:50,
		width: 90,
        height: 90,
        marginBottom: 25,
        resizeMode:'contain',
        borderRadius: 20,
        flexDirection:'row',
		backgroundColor: '#fff'
	},
	box2: {
		marginTop:5,
		marginBottom:5,
		height: 0,
		width: '100%',
		borderWidth: 0.5,
		borderColor: '#D8D8D8'
	}
})