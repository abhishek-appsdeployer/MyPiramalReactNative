import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Button} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Sidebar from './Sidebar';
const {width: screenWidth} = Dimensions.get('window');
const data = [
  {
    id: '1',
    source:
      'https://images.unsplash.com/photo-1531969179221-3946e6b5a5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    heading: 'Primamal vaikunth',
    tower: 'VAMA Tower',
  },
  {
    id: '2',
    source:
      'https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  },
  {
    id: '2',
    source:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
  },
];

const ImageItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={{uri: item.source}} style={styles.image} />
    <View style={styles.carouselinner}>
      <Text style={{color:"white",fontSize:20}}>{item.heading}</Text>
      <View style={styles.fle}>
        <View style={{color: 'white'}}>
          <Text style={{color: 'white'}}>Vama Tower {'\n'} Unit 1804</Text>
          <Text style={{color: 'white'}}>Rs 0.00</Text>
        </View>

        <Image
          style={{width: '30%', height: '100%'}}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />

        {/* jicons */}
        <View style={{flex: 1, gap: 5}}>
          <Icon
            style={{textAlign: 'center'}}
            name="arrow-forward-circle-outline"
            size={40}
            color="white"
          />
          <Icon
            style={{textAlign: 'center'}}
            name="arrow-back-circle-outline"
            size={40}
            color="white"
          />
        </View>
      </View>
    </View>
  </View>
);

const Dashboard = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navi = useNavigation();

  const handleDrawerOpen = () => {
    navi.openDrawer();
  };
  return (
    <>
   
      
    <View style={styles.main}>

    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems: 'center',}}>
    <Text style={{alignSelf:'center',color:"white",fontSize:20}}>Mypriamal</Text>
    <Icon
      onPress={handleDrawerOpen}
            style={{alignSelf: 'flex-end'}}
            name="menu"
            size={40}
            color="white"
          />
    
    </View>
    
      <View style={{flexDirection: 'row', gap: 30}}>
    
        <Text style={styles.wel}>Welcome Back, {"\n"}Tribhuvan Pawar</Text>
        <Image
          style={styles.img}
          source={{
            uri: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
      </View>
      
      <View style={{paddingTop: 50}}>
        <Carousel
          data={data}
          renderItem={({item}) => <ImageItem item={item} />}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 60}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // paddingHorizontal: 30,
          paddingVertical: 30,
        }}>
        <View style={{ flex: 1, width: 0, height:180,  borderTopLeftRadius: 10,borderTopRightRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 0, backgourndColor:"red", overflow: 'hidden'}}>
  <Button color="rgb(119,136,153)" title="Outstanding"  />
</View>
        <View style={{ flex: 1, width: 0,  borderTopRightRadius: 10,borderTopLefttRadius:0, borderBottomLefttRadius:0, borderBottomRightRadius: 10, backgourndColor:"red", overflow: 'hidden'}}>
  <Button color="red" title="Payment"  onPress={()=>navigation.navigate("Payment")} />
</View>
       
      </View>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgb(45, 63, 92)',
    height: 800,
    // flexDirection:"column",
    padding: 15,
  },
  wel: {
    color: 'white',
    fontSize: 28,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    alignItems:"flex-end"
  },
  itemContainer: {
    backgroundColor: 'rgb(119,136,153)',
    borderRadius: 10,
    padding: 0,
    color: 'white',
    fontSize: 30,
    height: 'auto',
    marginHorizontal: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  // itemText: {
  //   fontSize: 24,
  //   color: '#fff',
  // },
  image: {
    width: screenWidth - 80,
    height: screenWidth - 200,
    borderRadius: 10,
  },
  carouselinner: {
    // backgroundColor:"red",
    color: 'white',
    fontSize: 20,
    padding: 10,
    paddingVertical:30
  },
  fle: {
    // flex:1
    flexDirection: 'row',
    gap: 10,
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
});
export default Dashboard;
