import React from 'react'
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


function Courses() {
  const course = [
    {
      id: '1',
      name: 'Lorum ipsum dolor ait amet',
      image: require('../assets/images/hats.jpg'),
    },

    {
      id: '2',
      name: 'Lorum ipsum dolor ait amet',
      image: require('../assets/images/hats.jpg'),
    },

    {
      id: '3',
      name: 'Lorum ipsum dolor ait amet',
      image: require('../assets/images/hats.jpg'),
    },

  ]

  return (
    <View style={styles.container}>
      <Text style={styles.txt2}> Topics Recommonded For You </Text>

      <View style={styles.container1}>
        <Image style={styles.img} source={require('../assets/images/hats.jpg')}/>
        <View style={styles.container2}>
          <Text style={styles.txt}> Lorum ipsum dolor ait amet </Text>
          <Image style={styles.img2} source={require('../assets/images/rate.jpg')}/>
          <Text style={styles.txt3}> 4.2 </Text>
          <View style={styles.container3}>
            <Image style={styles.img1} source={require('../assets/images/vector.jpg')}/>
            <Image style={styles.img1} source={require('../assets/images/vector.jpg')}/>
            <Image style={styles.img1} source={require('../assets/images/vector.jpg')}/>
          </View>
        </View>

        <Button style={styles.btn} title='View'></Button>

      </View>
      
     
        
   
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
    container: {
       
        marginTop: 20,
        marginHorizontal: 25,
        height: 150
        
        

    },

    container1:{
      marginTop: 8,
      height: 94,
      width: 346,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 1, height: 2,
      },

    
      
    },

    container2: {
      display: "flex",
      flexDirection: "column",
      height: 40,
      width: 170
    },

    container3: {
      display: "flex",
      flexDirection: "row"
    },
    

    txt2: {
      fontSize: 22,
      fontFamily: "roboto",
      fontWeight: "bold",
      color: "black"
    },

    txt: {
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 8,
      marginLeft: 10

    },

    txt3: {
      marginLeft: 70,
      marginTop: 1
    },

    

    img: {
      height: 80,
      width: 130,
      borderRadius: 5,
      marginTop: 15,
      marginLeft: 20
      
    },

    img1: {
      borderRadius: 50,
      height: 15,
      width: 17,
      marginTop: 10,
      marginLeft: 8
    },

    img2: {
      height: 12,
      width: 57,
      marginLeft: 8,
      marginTop: 6
    },

    btn: {
      height: 14,
      width: 38,
      backgroundColor: "#5EB6BE",
      cursor: "pointer",
      hover:{
        background: "orange"
      }
    },


  

      
})