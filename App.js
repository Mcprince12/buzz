import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Fb from './screens/fb'
import Ins from './screens/ins'

export default function App() {
  
  
  return (
    <View style={styles.container} >
      <AppContainer/>
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator=createBottomTabNavigator({
  Fb:{screen:Fb},
  Ins:{screen:Ins},
})

const AppContainer = createAppContainer(TabNavigator);