'use strict';

import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';

class Alert extends Component {
  
  render() {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.text}>Alert</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fieldContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10
  }
});

export default Alert;
