import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Fb from './screens/fb'
import Ins from './screens/ins'
import AppHeader from './AppHeader'

export default function App() {
  
  
  return (
    <View style={styles.container} >
      <AppHeader/>
      <AppContainer/>
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop:700
  },
});
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Fb},
  Instagram:{screen:Ins},
})

const AppContainer = createAppContainer(TabNavigator);