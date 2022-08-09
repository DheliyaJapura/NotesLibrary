import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function Search() {
  return (
    <View style={styles.container}>
  
        <TextInput style={styles.search} placeholder="Search for anything"></TextInput>
        <Icon style={styles.searchi} name="search" size= {22} color="black" />
    
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        height: 40,
        color: "#7B7373",
        marginHorizontal: 25,
        marginVertical: 20,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        

    },

    search:{
        
        marginTop: 5,
        color: "#7B7373"
              
    },

    searchi: {
        marginHorizontal: 130,
        marginTop:8
    }
})