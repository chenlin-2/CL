import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, useWindowDimensions,TouchableOpacity, View, Image } from 'react-native';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

export type Values = {
	id: number
	key: number
	user: string
	position: string
	password: string
}


export default function LoginForm () {
	const navigation = useNavigation();
	let wid = useWindowDimensions().width;
	const handleSub = (values) => {
		
		if(wid > 400) {
			navigation.navigate('manager');
		}else{
			navigation.navigate('Product');
		};
	}
	return (
			<View style={{
				width:'80%', 

			}}>
				<Formik
				initialValues={{
					key: '',
					user: '',
					password: '',
				}}
				onSubmit={values => handleSub(values)
				}
				>
					{({handleChange, handleBlur, handleSubmit, values }) => (
						<View>
							<Text style={{
								alignSelf: 'center',
								fontSize:useWindowDimensions().width > 700 ? 30 : 30}}>
                      			欢迎登录
                    		</Text>
                			<TextInput
                			style={{marginTop: 25, 
                				alignSelf: 'center',
                				width: useWindowDimensions().width > 400 ? '60%' : '100%', 
                				heigth:useWindowDimensions().height > 700 ? '60%' : '30%',
                				padding: 10,
                				backgroundColor: '#fff',
                				borderRadius: 32,
                				paddingLeft: 25,
                				fontSize:useWindowDimensions().width > 700 ? 24 : 20,
                				borderStyle: 'dotted'}}
                				placeholder="请输入用户名"
                				onChangeText={handleChange('user')} 
                				value={values.user} />
                			<TextInput
                				style={{marginTop: 15,
                				alignSelf: 'center',
                				marginBottom: 25,
                				width:  useWindowDimensions().width > 400 ? '60%' : '100%', 
                				heigth:useWindowDimensions().height > 700 ? '60%' : '30%', 
                				backgroundColor: '#fff',
                				borderRadius: 32,
                				paddingLeft: 25,
                				padding: 10,
                				fontSize:useWindowDimensions().width > 700 ? 24 : 20,
                				borderStyle: 'dotted'}} 
                				placeholder="请输入密码" 
                				onChangeText={handleChange('password')} 
                				value={values.password} />
                			<TouchableOpacity
                style={{
                  width: useWindowDimensions().width > 400 ? '40%' : '50%',
                  marginTop: 25,
                  borderRadius: 32,
                  alignSelf: 'center',
                  backgroundColor: 'skyblue',
                  alignItems: 'center',
                  heigth:useWindowDimensions().height > 700 ? '60%' : '30%', 
                  padding: 10}}
                onPress={handleSubmit}
                  >
                  <Text
                  style={{
                    fontSize:useWindowDimensions().width > 700 ? 30 : 20
                  }}
                  >登录</Text>
                </TouchableOpacity>
						</View>
					)}
				</Formik>
			</View>
			);
}