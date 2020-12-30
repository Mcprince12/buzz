import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Ins extends React.Component{
    render(){
        return(
            <View>
               <Text style={styles.itext}>
                   Instagram page
               </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itext:{
        textAlign:'center', fontSize: 20, marginTop:200
    },

  
})