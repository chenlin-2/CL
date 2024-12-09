import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Manager from '../pages/Manager';
import Inventory from '../pages/Inventory';
import CKTicket from '../pages/CKTicket';
import ZWTicket from '../pages/ZWTicket';
import RJTicket from '../pages/RJTicket';
import DGTicket from '../pages/DGTicket';
import TJTicket from '../pages/TJTicket';
import JMTicket from '../pages/JMTicket';
import HJTicket from '../pages/HJTicket';
import ZGZZTicket from '../pages/ZGZZTicket';
import ZGBZTicket from '../pages/ZGBZTicket';
import JGZZTicket from '../pages/JGZZTicket';
import JGBZTicket from '../pages/JGBZTicket';

const Drawer = createDrawerNavigator();

export default function MDrawer() {
	return (
		<Drawer.Navigator
			initialRouteName="Manager"
			ScreenOption={{
				headerStyle: {backgroundColor: 'tomato'},
			}}
		>
			<Drawer.Screen
			 name="Login"
			 component={Login}
			 options={{ title: '登录' }} 
			/>
			<Drawer.Screen
			 name="Manager" 
			 component={Manager} 
			 options={{ title: '管理员' }}
			 />
			<Drawer.Screen
			 name="Inventory" 
			 component={Inventory} 
			 options={{ title: '库存' }}
			 />
			<Drawer.Screen
			 name="CKTicket" 
			 component={CKTicket} 
			 options={{ title: '冲孔工序表' }}
			 />
			<Drawer.Screen
			 name="ZWTicket" 
			 component={ZWTicket} 
			 options={{ title: '折弯工序表' }}
			 />
			<Drawer.Screen
			 name="RJTicket" 
			 component={RJTicket} 
			 options={{ title: '撕膜入角工序表' }}
			 />
			<Drawer.Screen
			 name="DGTicket" 
			 component={DGTicket} 
			 options={{ title: '倒钩工序表' }}
			 />
			<Drawer.Screen
			 name="TJTicket" 
			 component={TJTicket} 
			 options={{ title: '贴胶工序表' }}
			 />
			<Drawer.Screen
			 name="HJTicket" 
			 component={HJTicket} 
			 options={{ title: '焊角工序表' }}
			 />
			 <Drawer.Screen
			 name="JMTicket" 
			 component={JMTicket} 
			 options={{ title: '镜门工序表' }}
			 />
			<Drawer.Screen
			 name="ZGZZTicket" 
			 component={ZGZZTicket} 
			 options={{ title: '主柜组装工序表' }}
			 />
			<Drawer.Screen
			 name="JGZZTicket" 
			 component={JGZZTicket} 
			 options={{ title: '镜柜组装工序表' }}
			 />
			<Drawer.Screen
			 name="ZGBZTicket" 
			 component={ZGBZTicket} 
			 options={{ title: '主柜包装工序表' }}
			 />
			<Drawer.Screen
			 name="JGBZTicket" 
			 component={JGBZTicket} 
			 options={{ title: '镜柜包装工序表' }}
			 />
		</Drawer.Navigator>
		);
}