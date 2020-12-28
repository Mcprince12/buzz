import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    Facebook
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