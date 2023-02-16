import React,{useEffect} from 'react'
import { View,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Piramal = ({navigation}) => {
  useEffect(()=>{
    const timeout = setTimeout(() => {
      navigation.navigate('First');
    }, 5 * 1000);

  },[])
  return (
    <>
    <View  style={{flexDirection:"row", gap:15,justifyContent:"center", alignItems:"center",color:"white", backgroundColor:"red",height:800}}>
    <Icon onPress={()=>navigation.navigate("First")}
            style={{textAlign: 'center'}}
            name="hand-peace-o"
            size={80}
            color="white"
          />
    <View  >
    
    <Text onPress={()=>navigation.navigate("first")} style={{color:"white",fontSize:30}}>Piramal  </Text>
    <Text style={{color:"white" ,fontSize:20}}>Reality</Text>
    </View>
    
</View>
    </>
  )
}

export default Piramal
