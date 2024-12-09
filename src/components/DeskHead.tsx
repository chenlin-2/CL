import React, { useState, Component, newState } from 'react';
import { Image, View, Text, ScrollView, useWindowDimensions, TextInput,TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default class DeskHead extends Component{
	render() {
		return (
			<View style={{
				backgroundColor: 'skyblue',
				width: '100%',
				height: '13%',
				flexDirection: 'row',
				alignItems: 'center',
				paddingLeft: 20
				 }}>
				 <View style={{
				 	width: 40,
          			height: 40,
				 	backgroundColor: '#fff',
				 	borderRadius: 5
				 }}>
				 	<Image 
					style={{
						width: 40,
          				height: 40,
          				resizeMode:'contain',
						}}
					source={require('../images/logo.png')} />
				 </View>
				
					<Text style={{
						marginLeft: 10,
						fontSize: 18,
						fontFamily: 'Cochin'

					}}>维洁龙浴室柜</Text>
			</View>
			);
	}
}