import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export default function Header() {

    return(
        <View style={styles.header}>
            <Text style={styles.title}>How is it that this is not working?</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:30, 
        backgroundColor:'coral',
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    }
})