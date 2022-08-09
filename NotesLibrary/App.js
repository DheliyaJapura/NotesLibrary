import React from 'react'
import { NavigationContainer } from 'react-native-screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {View,Text,StyleSheet, Image} from 'react-native'
import Home from './src/components/Home'
import Subjects from './src/components/Subjects'
import Cards from './src/components/Cards'
import Courses from './src/components/Courses'


function App() {
  return (

      <View>
        <View>
          <Image style={styles.img} source={require('./src/assets/images/menu.png')} />
        </View>
          <Home />
          <Subjects />  
          <Cards />
          <Courses />
      </View>  
      
    )
  }

  export default App

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
    marginHorizontal: 25,
    marginTop:20,
  },
  
  navc: {
    
  }

  
  
})

