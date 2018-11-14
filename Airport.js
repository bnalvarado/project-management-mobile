'use strict';

import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from 'react-native';
import GLOBALS from './Globals';

class Airport extends Component {
  // Constructor
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  // Execute code when view load
  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  // Render view
  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={styles.fieldContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text style={styles.text}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

// Define style for page view
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
