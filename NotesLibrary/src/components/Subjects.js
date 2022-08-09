import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

function Subjects() {
  return (
    <View style={styles.container}>
        <Text style={styles.head}>Subject</Text>
    </View>
  )
}

export default Subjects

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: "yellow",
    //     height: 100,
        
    // },

    head: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#000000",
        fontSize: 22
    }
})