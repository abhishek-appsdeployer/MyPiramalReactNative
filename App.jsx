import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import Dashboard from './components/Dashboard';
import First from './components/First';
import Payment from './components/Payment';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Piramal from './components/Piramal';
import Sidebar from './components/Sidebar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="sidebar"
            component={Sidebar}
          />
        
          <Stack.Screen
            options={{headerShown: false}}
            name="piramal"
            component={Piramal}
          />
          <Stack.Screen
            name="first"
            options={{headerShown: false}}
            component={First}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="dashboard"
            component={Dashboard}
          />

          <Stack.Screen
            name="payment"
            options={{headerShown: false}}
            component={Payment}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Sidebar/> */}

      
    </>
  );
};

export default App;
