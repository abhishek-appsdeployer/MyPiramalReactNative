import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'react-native-elements';
import First from './First';
import Dashboard from './Dashboard';
import Payment from './Payment';
import Piramal from './Piramal';

const Drawer = createDrawerNavigator();
const Sidebar = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          drawerBackgroundColor: 'red',
          drawerStyle: {
            backgroundColor: 'rgb(45, 63, 92)',
            width: '95%',

          },
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "white",
        }}
        drawerContentOptions={{
          
        }}>
        <Drawer.Screen
          key="piramal"
          name="Pirmal"
          component={Piramal}
          // style={{color:"white"}}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'home';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />

        <Drawer.Screen
          key="first"
          name="First"
          component={First}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'feedback';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          key=""
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'dashboard';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />

        <Drawer.Screen
          key="payment"
          name="Payment"
          component={Payment}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'payment';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />
        {/* <View>
        <Text>dfdfd</Text>
        </View> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Sidebar;
