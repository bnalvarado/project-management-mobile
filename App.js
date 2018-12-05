import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { fromTop } from 'react-navigation-transitions';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Airport from './components/Airport';
import History from './components/History';
import Alert from './components/Alert';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
]);
console.disableYellowBox = true;

export default createStackNavigator({
  
  login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
      
    }),
  },
  dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      header: null,
    }),
  },
  history: {
    screen: History,
    navigationOptions: () => ({
      header: null,
    }),
  },
  
  airport: {
    screen: Airport,
    navigationOptions: () => ({
      header: null,
    }),
  },
 
  
  
  alerts: {
    screen: Alert,
    navigationOptions: () => ({
      title: 'Trip & Agent Alerts',
    }),
  },
},
  {
    transitionConfig: () => fromTop(),
  });
