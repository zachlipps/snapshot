import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

export default (App = StackNavigator({
  Home: {
    screen: HomeScreen
  }
}));
