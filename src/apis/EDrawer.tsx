import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Employee from '../pages/Employee';
import ProductList from '../pages/ProductList';

const Drawer = createDrawerNavigator();
export default function EDrawer() {
	return (
		<Drawer.Navigator
			initialRouteName="Product"
			ScreenOption={{
				headerStyle: {backgroundColor: 'tomato'},
			}}
		>
			<Drawer.Screen
			 name="Login"
			 component={Login}
			 options={{ title: 'Login' }} 
			/>
			<Drawer.Screen
			 name="Product" 
			 component={ProductList} 
			 options={{ title: 'ProductList' }}
			 />
			<Drawer.Screen
			 name="Employee" 
			 component={Employee} 
			 options={{ title: 'Employee' }}
			 />
			 
		</Drawer.Navigator>
		);
}
