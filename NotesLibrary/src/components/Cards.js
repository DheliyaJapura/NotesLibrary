import react from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList, Image} from 'react-native'


import React from 'react'

function Cards() {
  // const subjects = [
  //   {
  //     id: '1',
  //     name: 'Science',
  //     //image: require('./assets/images/hats.jpg'),
  //   },

    
  //   {
  //     id: '2',
  //     name: 'Commerce',
      
  //   },

     
  //   {
  //     id: '3',
  //     name: 'Art',
      
  //   }
  // ]




  return (
    // <SafeAreaView style={styles.container}>
    //   <FlatList 
    //     horizontal
    //     data={subjects}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({item}) =>
    //     <View style={styles.container1}> 
    //       <Text>{item	.name}</Text>
         
    //     </View>
      
    //   } 
    //   />
    
    
    // </SafeAreaView>  

    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/images/pico.png')} />
        <Image style={styles.img1} source={require('../assets/images/pict.png') } />
        
    </View>
  )

}

export default Cards

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    marginHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    marginTop: 20
    

    

  },

  img: {
    height: 130,
    width:220
  },

  img1: {
    height: 130,
    width:220,
    marginLeft: 10
  },
})