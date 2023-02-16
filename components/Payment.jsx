import React from 'react'
import { View,Text,Image,Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
const Payment = ({navigation}) => {
  return (
   <>
    <View>
        <View style={{backgroundColor:"rgb(45, 63, 92)"}}>
        <View style={{flexDirection:"row",gap:70,padding:10}}>
        <Icon onPress={()=>navigation.navigate("Dashboard")} style={{}} name="keyboard-arrow-left" size={30} color="white" />
        <Text style={{color:"white", fontSize:20,textAlign:"center"}}>MyPiramal</Text>


        </View>
          <Text style={{color:"white",fontSize:30,padding:20}}>My Payments</Text>
        </View>
        {/* Next button start form hear */}
        <View style={{padding:5}}>
        <View style={{borderRadius:10,backgroundColor:"red",paddingVertical:8,overflow: 'hidden',width:90}}>
      {/* <Button
        color="red"
        // style={{borderRadius:45}}
        
        
        onPress={() => navigation.navigate('dashboard')}
        title="Next"
      /> */}
      <Text style={{textAlign:"center",color:"white",fontSize:20}}>Next</Text>
      </View>
      {/* cards */}
      <View style={{backgroundColor:"#FBEAEA",borderRadius:5, marginTop:10, padding:15}}>
      <View style={{  flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:15}}>2020-01-2028</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{fontWeight:"bold",color:"black", fontSize:15}}> &#x20b9; 10,00,000.00</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row',paddingTop:10 }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:14}}>Receipt NO.</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{color:"black", fontSize:14}}>RECP20491</Text>
      </View>
    </View>


    <View style={{flexDirection: 'row',paddingTop:30 }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:14}}>Type</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{color:"black", fontSize:14}}>Advance</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row',paddingTop:1 }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:14}}>Drawn on</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{color:"black", fontSize:14}}>2020-01-28</Text>
      </View>
    </View>
    <View style={{flexDirection: 'row',paddingTop:1 }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:14}}>Branch Name</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{color:"black", fontSize:14}}>ICICI BANK</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row',paddingTop:1 }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:14}}>Instrument Date</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{color:"black", fontSize:14}}>2020-01-28</Text>
      </View>
    </View>

    {/* <View style={{marginTop:20,borderRadius:30,overflow: 'hidden'}}>
      <Button
        color="red"
        // style={{borderRadius:45}}
        
        
        onPress={() => navigation.navigate('dashboard')}
        title="download"
        icon={<Icon name="keyboard-arrow-left" size={20} color="black" style={{ marginRight: 10 }} />}
      />
      </View> */}
      <View style={{marginTop:20,flexDirection:"row",justifyContent:"center",backgroundColor:"red",borderRadius:30,paddingVertical:8}}>
      <Text style={{color:"white", fontSize:20}}>DOWNLOAD</Text>
      <Icon name="file-download" size={20} color="white" style={{ marginRight: 10 ,paddingTop:5}} />
      
      
      </View>

     

      </View>

      <View style={{backgroundColor:"#FBEAEA",borderRadius:5, marginTop:20, padding:15}}>
      <View style={{  flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:15}}>2020-01-2028</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{fontWeight:"bold",color:"black", fontSize:15}}>&#x20b9; 10,00,000.00</Text>
      </View>
    </View>
</View>

<View style={{backgroundColor:"#FBEAEA",borderRadius:5, marginTop:20, padding:15}}>
      <View style={{  flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:15}}>2020-01-2028</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{fontWeight:"bold",color:"black", fontSize:15}}>&#x20b9; 10,00,000.00</Text>
      </View>
    </View>
</View>

<View style={{backgroundColor:"#FBEAEA",borderRadius:5, marginTop:15, padding:15}}>
      <View style={{  flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:15}}>2020-01-2028</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{fontWeight:"bold",color:"black", fontSize:15}}>&#x20b9; 10,00,000.00</Text>
      </View>
    </View>
</View>

<View style={{backgroundColor:"#FBEAEA",borderRadius:5, marginTop:15, padding:15}}>
      <View style={{  flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{color:"black",fontSize:15}}>2020-01-2028</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
       <Text style={{fontWeight:"bold",color:"black", fontSize:15}}>&#x20b9; 10,00,000.00</Text>
      </View>
    </View>
</View>
          
        </View>
    </View>
   </>
  )
}

export default Payment
