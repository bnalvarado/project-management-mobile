'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class Dashboard extends Component {

  moveTo = (page) => {
    this.props.navigation.navigate(page);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={()=>this.moveTo('airport')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Airport Lookup</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=>this.moveTo('history')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Historical Flight Status</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=>this.moveTo('alerts')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Trip & Agent Alerts</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default Dashboard;
