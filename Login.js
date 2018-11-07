'use strict';

import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';

class Login extends Component {

  handleLogin = () => {
    this.props.navigation.navigate('dashboard');
  }

  render() {
    return (
      <View style={styles.fieldContainer}>
        <TextInput
          style={styles.text}
          placeholder='Username/Email'
          spellCheck={false}
        />
        <TextInput
          style={styles.text}
          placeholder='Password'
          spellCheck={false}
        />
        <TouchableHighlight
          onPress={this.handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
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

export default Login;
