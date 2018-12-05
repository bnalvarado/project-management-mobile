'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import CollapseView from "react-native-collapse-view";
import { db } from '../database/db';
class Dashboard extends Component {

  moveTo = (page) => {
    this.props.navigation.navigate(page);
  }
  salir() {
    var salir = false;

    db.app.auth().signOut().then(function () {
      salir = true;
    }).catch(function (error) {
      alert(error.message);
    });

    if(salir){
      this.props.navigation.navigate('login');
    }
  }

  _renderAirport = (collapse) => {
    return (
      <View style={styles.view}>
        <Icon size={40} style={styles.opciones} reverse name='local-airport' color='#517fa4' />
      </View>

    )
  }
  _renderHistoricos = (collapse) => {
    return (
      <View style={styles.view}>
        <Icon size={40} style={styles.opciones} reverse name='import-contacts' color='#517fa4' />
      </View>

    )
  }

  _renderSalir = (collapse) => {
    return (
      <View style={styles.view}>
        <Icon size={40} style={styles.opciones} reverse name='power-settings-new' color='#517fa4' />
      </View>

    )
  }

  _renderCollapseView1 = (collapse) => {
    return (
      <View style={styles.collapseView}>
        <Text>Obtienes los aeropuertos cercanos de acuerdo a tu ubicación.</Text>
        <TouchableHighlight
          onPress={() => this.moveTo('airport')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ir</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _renderCollapseView2 = (collapse) => {
    return (
      <View style={styles.collapseView}>
        <Text>Obtener los datos históricos de los vuelos que aterrizaron en una fecha indicada por el usuario.</Text>
        <TouchableHighlight
          onPress={() => this.moveTo('history')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ir</Text>
        </TouchableHighlight>
      </View>
    )
  }


  _renderCollapseView4 = (collapse) => {
    return (
      <View style={styles.collapseView}>
        <Text>Salir de la cuenta</Text>
        <TouchableHighlight
          onPress={() => this.salir()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableHighlight>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <CollapseView
          tension={100}
          renderView={this._renderAirport}
          renderCollapseView={this._renderCollapseView1}
        />
        <CollapseView
          tension={100}
          renderView={this._renderHistoricos}
          renderCollapseView={this._renderCollapseView2}
        />

        <CollapseView
          tension={100}
          renderView={this._renderSalir}
          renderCollapseView={this._renderCollapseView4}
        />

      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }, view: {
    alignItems: "center"
  },
  opciones: {
    textAlign: "center",
    justifyContent: "center"
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