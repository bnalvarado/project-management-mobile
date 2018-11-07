import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Dashboard from './Dashboard';
import Airport from './Airport';
import History from './History';
import Alert from './Alert';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
]);

export default createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login Page',
    }),
  },
  dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      title: 'Dashboard',
    }),
  },
  airport: {
    screen: Airport,
    navigationOptions: () => ({
      title: 'Airport Lookup',
    }),
  },
  history: {
    screen: History,
    navigationOptions: () => ({
      title: 'Historical Flight Status',
    }),
  },
  alerts: {
    screen: Alert,
    navigationOptions: () => ({
      title: 'Trip & Agent Alerts',
    }),
  },
});
