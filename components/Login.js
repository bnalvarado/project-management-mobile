'use strict';

import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Animated } from 'react-native';
import fondo from '../assets/fondo.jpg';
import logo from '../assets/logo.png';
import { Icon, Button, Input } from 'react-native-elements';
import { db } from '../database/db';
import { TabView, SceneMap } from 'react-native-tab-view';

export default class Login extends Component {
  componentDidMount() {
    db.app.auth().onAuthStateChanged(user => {this.props.navigation.navigate(user ? 'dashboard' : 'login');});
  }
  handleLogin = () => {
    try {
      var correo = this.state.correo_login;
      var contra = this.state.password_login;
      db.app.auth().signInWithEmailAndPassword(correo,contra).then(() => this.props.navigation.navigate('dashboard')).catch(error=>this.setState({errorMessage:error.message}));
    } catch (error) {
      alert("error de validacion");
    }
    //this.props.navigation.navigate('');
  }
  handleRegistro = () => {
    try {
      var email = this.state.correo;
      var password = this.state.contra1;
      var password2 = this.state.contra2;
      if (email == "" || password == "" || password2 == "") {
        alert("Todos los campos son requeridos");
        return;
      }
      if (password != password2) {
        alert("Las contraseñas no coinciden");
        return;
      }
      if (password.length < 5 && password.length < 5) {
        alert("La contraseña debe contener 5 caracteres minimo");
        return;
      }
      db.app.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          alert(error.message);
            break;
        }
      });
    } catch (error) {
      alert("Error al registrar");
    }
  }
  Registro = () => (
    <View style={styles.tabs}>
        <View style={styles.view_text}>
          <Input onChangeText={(text) => this.setState({ correo: text })} inputStyle={{ color: "#fff" }} style={styles.text_input} rightIcon={<Icon name='email' color='#fff' />} selectionColor={"dodgerblue"} label="Email" labelStyle={{ color: "#fff" }} />
        </View>
        <View style={styles.view_text}>
          <Input onChangeText={(text) => this.setState({ contra1: text })} inputStyle={{ color: "#fff" }} style={styles.text_input} rightIcon={<Icon name='fingerprint' color='#fff' />} selectionColor={"dodgerblue"} secureTextEntry={true} label='Contraseña' labelStyle={{ color: "#fff" }} />
        </View>
        <View style={styles.view_text}>
          <Input onChangeText={(text) => this.setState({ contra2: text })} inputStyle={{ color: "#fff" }} style={styles.text_input} rightIcon={<Icon name='fingerprint' color='#fff' />} selectionColor={"dodgerblue"} secureTextEntry={true} label='Confirmar Contraseña' labelStyle={{ color: "#fff" }} />
          <Button title='Registrarse' buttonStyle={styles.button} onPress={this.handleRegistro} />
        </View>
      </View>
  );
  Iniciar = () => (
    <View style={styles.tabs} >
      <View style={styles.view_text2}>
        <Input inputStyle={{ color: "#fff" }} onChangeText={(text) => this.setState({ correo_login: text })} style={styles.text_input} rightIcon={<Icon name='account-circle' color='#fff' />} selectionColor={"dodgerblue"} label="Correo" labelStyle={{ color: "#fff" }} />
      </View>
      <View style={styles.view_text2}>
        <Input inputStyle={{ color: "#fff" }} onChangeText={(text) => this.setState({ password_login: text })} style={styles.text_input} rightIcon={<Icon name='fingerprint' color='#fff' />} selectionColor={"dodgerblue"} secureTextEntry={true} label='Contraseña' labelStyle={{ color: "#fff" }} />
        <Button title='Iniciar Sesion' buttonStyle={styles.button} onPress={this.handleLogin} />
      </View>
    </View>
  );
  state = {
    index: 0,
    routes: [
      { key: 'login', title: 'Iniciar' },
      { key: 'registro', title: 'Registro' },
    ],
  };
  _handleIndexChange = index => this.setState({ index });
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#1e90ff' : '#909497')
            ),
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color,fontSize:20 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  _renderScene = SceneMap({
    login: this.Iniciar,
    registro: this.Registro,
  });
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={fondo} style={styles.fondo}></Image>
        <View style={styles.view_logo}>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
  },
  tabs: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  fondo: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "115%",

  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  view_text2: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7%",
    marginBottom: "5%"
  },
  view_text: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "2%"
  },
  button: {
    top: 15,
    height: 40,
    backgroundColor: "#1e90ff",
    borderRadius: 1000,
    width: 150
  },
  logo: {
    height: 100,
    width: 100,
  },
  view_logo: {
    alignItems: "center",
    marginTop: "20%",
    marginBottom: "10%"
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});


