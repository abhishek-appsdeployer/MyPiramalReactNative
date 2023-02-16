import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sidebar from './Sidebar';
const First = ({navigation}) => {
  return (
    <>
{/* <Sidebar/> */}
   
    <View style={styles.main}>
        <Icon style={{textAlign:"center"}} name="wifi" size={200} color="white" />
      <Text style={styles.connect}>
        Connect to WiFi for a Seamless Experience
      </Text>

      <Text style={{textAlign:"center",color:"white",paddingHorizontal:70,fontSize:15, paddingVertical:20}}>Ensure your instruments is connected to Wi-Fi or Mobile network for seamless usage</Text>
      <View style={{borderRadius:10,overflow: 'hidden'}}>
      <Button
        color="red"
        
        
        
        onPress={() => navigation.navigate('Dashboard')}
        title="Next"
      />
      </View>
      
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(45, 63, 92)',
    height: 800,
    padding: 20,
  },
  ima: {
    width: '100%',
    height: '30%',
  },
  connect: {
    fontSize: 30,
    paddingHorizontal: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    borderRadius:50
  },
});
export default First;
