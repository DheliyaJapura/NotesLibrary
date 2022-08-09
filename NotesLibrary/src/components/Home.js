import React from 'react'
import {View, StyleSheet, Text } from 'react-native'
import Search from './Search'

function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello Dheliya !</Text>
        <Text style={styles.h1}> Let's start learning </Text>

    <Search />
    </View>


  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height: 160,
        width: 376,  
        backgroundColor: "#00A9B6",
        borderRadius: 30,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 15,
        marginVertical: 30
        
        
    },


    text: {
        color: "#FFFFFF",
        padding: 20,
        fontSize: 18,
        paddingHorizontal: 21
        
        
        
    },

    h1:{
        color: "#FFFFFF",
        paddingHorizontal: 20,
        
        
    
    }

})