import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View style={styles.cont}>
             <Text style={styles.text}>
                 Facebook page
             </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center', fontSize: 20, marginTop:150
    },
    cont:{
        alignSelf:'center',
        justifyContent:'center',
    }

    
})