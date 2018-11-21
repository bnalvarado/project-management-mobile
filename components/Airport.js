'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const styles2 = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
class Airport extends Component {

  render() {
    return (
      <View style={styles.fieldContainer}>
        <MapView
        style={styles2.map}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
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

export default Airport;
