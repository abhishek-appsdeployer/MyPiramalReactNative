import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator,  DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
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
        drawerContent={props => {
    return (
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
       

        {/* <DrawerItem label="Logout" labelStyle={{ color: 'white', paddingHorizontal:10 }} style={{backgroundColor:"red",borderRadius:20,}} onPress={() => props.navigation.navigate("Payment")}
        icon={() => <Icon name="home" size={20} color="white" /> }
         /> */}
          <DrawerItem
        label={() => (
          <View style={{ flexDirection: 'row', gap:5,justifyContent:"center",backgroundColor:"red",borderRadius:20,paddingVertical:10 }}>
            <Text style={{color:"white",fontSize:15 }}>Logout</Text>
            <Icon name="logout" size={20} color="white" />
          </View>
        )}
        onPress={() => {
          props.navigation.navigate("Payment")
        }}
      />
         
      </DrawerContentScrollView>
      
      
    )
  }}
  
        >
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
        <Drawer.Screen
          key="payment"
          name="Feedback"
          component={Payment}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'feedback';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />

<Drawer.Screen
          key="payment"
          name="Tutorials"
          component={Payment}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'class';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />
         <Drawer.Screen
          key="payment"
          name="Notification"
          component={Payment}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'mobile';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />

      <Drawer.Screen
          key="payment"
          name="My Assist"
          component={Payment}
          options={{
            drawerIcon: ({focused, size}) => {
              const iconName = 'help';
              return <Icon name={iconName} size={size} color="white" />;
            },
            headerShown: false,
          }}
        />
        
       
        
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Sidebar;
