import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ins extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    Instagram
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        textAlign:'center'
    }
})