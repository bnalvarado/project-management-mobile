import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion}from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';

//curl -v  -X GET 
//"https://api.flightstats.com/flex/airports/rest/v1/json/countryCode/CR?appId=3f07ec7b&appKey=0cce351d7470b103dc93075044f70e98"

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 4;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

Geocoder.init('AIzaSyCFMVffCZWw0XCGLfxq-RpeluIfBzmHxB0');

class Airport extends React.Component {
  constructor() {
    super();

    this.state = {
      location: null,
      latitude: null,
      longitude: null,
      countryCode: null,
      airports: [],
      errorMessage: null,

    };


  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }


    axios.get("https://api.flightstats.com/flex/airports/rest/v1/json/countryCode/CR?appId=3f07ec7b&appKey=0cce351d7470b103dc93075044f70e98")
      .then(res => {
        const airports = res.data.airports;
        //   console.log(res.data);
        this.setState({ airports });

        console.log(this.state.airports);
      })

    //   console.log(this.state.airports.map(airport => { airport.name }));
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync();
    this.setState({ location });
    //  console.log(location);
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      error: null,
    });
    ///code country
    Geocoder.from(this.state.latitude, this.state.longitude).
      then(json => {
        var addressComponent = json.results[0].address_components[2];
        // console.log(addressComponent.short_name);
        var countryCode = addressComponent.short_name;
        this.setState({ countryCode });

      })
      .catch(error => console.warn(error));

  };


  render() {

    return (
      <View style={styles.fieldContainer}>
    
   <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
    <Marker
          coordinate={{
            latitude: 10.3308715,
            longitude: -84.4507559
          }}
          title="ksakd"
        />

  {this.state.airports.map(airport => (
    <Marker
      coordinate={{
        latitude: airport.latitude,
        longitude: airport.longitude
      }}
      title={airport.name}
      description={airport.city}
    />
  ))}


</MapView>

      </View>

    );
  }
}

const styles = StyleSheet.create({
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

});
export default Airport;
