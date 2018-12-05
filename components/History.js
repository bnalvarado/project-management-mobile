'use strict';

import React, { Component } from 'react';
import { Modal, View, ScrollView, StyleSheet, TouchableOpacity, TouchableHighlight, Animated, StatusBar, Dimensions } from 'react-native';
//import Chart from 'react-native-chartjs';
import axios from 'axios';
import { TabView, SceneMap } from 'react-native-tab-view';
import ActionButton from 'react-native-action-button';
import { Icon, Divider, Text } from 'react-native-elements';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph } from 'react-native-chart-kit';
console.disableYellowBox = true;
import prueba from '../prueba';
/*const chartConfiguration = {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

};*/
class History extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'llegada', title: 'Llegadas' },
        { key: 'salida', title: 'Salidas' },
      ],
      /// chartConfiguration: chartConfiguration,
      historicos: [],
      modalVisible: false,
      mayor:0,
      menor:0
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
   /* axios.get("https://api.flightstats.com/flex/flightstatus/historical/rest/v3/json/airport/status/SJO/dep/2018/12/1/17?appId=ed2402b7&appKey=3084bf6c8d85e4c793b9f3a7459c5890&utc=false&numHours=1&maxFlights=10").then((response) => {
      
    })*/
    StatusBar.setHidden(true);
    /*axios.get("https://api.flightstats.com/flex/flightstatus/historical/rest/v3/json/airport/status/ABQ/dep/2018/11/3/5?appId=3f07ec7b&appKey=0cce351d7470b103dc93075044f70e98&utc=false&numHours=1&maxFlights=5")
      .then(res => {
        const historico = res.data;
        this.setState({ historico });
        console.log(historico);
      })*/
  }
  Llegadas = () => (
    <ScrollView style={styles.tabs}>
      {
        ///prueba.DATA.flightStatuses.map(function (x) {
          prueba.LLEGADA.flightStatuses.map(function (x) {
          return (
            <View>
              <Divider style={styles.divider} />
              <Text h4 style={styles.h4}>{x.primaryCarrierFsCode + " - " + x.departureAirportFsCode}</Text>
              <LineChart
                data={{
                  labels: ['SBM', 'BM', 'SAM', 'AM', 'STOM', 'TOM', 'STIM', 'TIM'],
                  datasets: [{
                    data: [
                      x.flightDurations.scheduledBlockMinutes ? x.flightDurations.scheduledBlockMinutes : 0,
                      x.flightDurations.blockMinutes ? x.flightDurations.blockMinutes : 0,
                      x.flightDurations.scheduledAirMinutes ? x.flightDurations.scheduledAirMinutes : 0,
                      x.flightDurations.airMinutes ? x.flightDurations.airMinutes : 0,
                      x.flightDurations.scheduledTaxiOutMinutes ? x.flightDurations.scheduledTaxiOutMinutes : 0,
                      x.flightDurations.taxiOutMinutes ? x.flightDurations.taxiOutMinutes : 0,
                      x.flightDurations.scheduledTaxiInMinutes ? x.flightDurations.scheduledTaxiInMinutes : 0,
                      x.flightDurations.taxiInMinutes ? x.flightDurations.taxiInMinutes : 0
                    ]
                  }]
                }}
                width={Dimensions.get('window').width - 10} // from react-native
                height={210}
                chartConfig={{
                  backgroundColor: '#1e88e5',
                  backgroundGradientFrom: '#0d47a1',
                  backgroundGradientTo: '#1e88e5',
                  //decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => 'rgba(255, 255, 255, 0.5)',
                  style: {
                    borderRadius: 16
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 10,
                  paddingBottom: 10
                }}
              />

            </View>);
        })
      }



    </ScrollView>
  );
  ///<Chart chartConfiguration={this.state.chartConfiguration} defaultFontSize={20} />
  Salidas = () => (
    <ScrollView style={styles.tabs}>
      {
       
        ///prueba.DATA.flightStatuses.map(function (x) {
          prueba.SALIDA.flightStatuses.map(function (x) {
          
          return (
            <View>
              <Divider style={styles.divider} />
              <Text h4 style={styles.h4}>{x.primaryCarrierFsCode + " - " + x.arrivalAirportFsCode}</Text>
              <LineChart
                data={{
                  labels: ['SBM', 'BM', 'SAM', 'AM', 'STOM', 'TOM', 'STIM', 'TIM'],
                  datasets: [{
                    data: [
                      x.flightDurations.scheduledBlockMinutes ? x.flightDurations.scheduledBlockMinutes : 0,
                      x.flightDurations.blockMinutes ? x.flightDurations.blockMinutes : 0,
                      x.flightDurations.scheduledAirMinutes ? x.flightDurations.scheduledAirMinutes : 0,
                      x.flightDurations.airMinutes ? x.flightDurations.airMinutes : 0,
                      x.flightDurations.scheduledTaxiOutMinutes ? x.flightDurations.scheduledTaxiOutMinutes : 0,
                      x.flightDurations.taxiOutMinutes ? x.flightDurations.taxiOutMinutes : 0,
                      x.flightDurations.scheduledTaxiInMinutes ? x.flightDurations.scheduledTaxiInMinutes : 0,
                      x.flightDurations.taxiInMinutes ? x.flightDurations.taxiInMinutes : 0
                    ]
                  }]
                }}
                width={Dimensions.get('window').width - 10} // from react-native
                height={210}
                chartConfig={{
                  backgroundColor: '#1e88e5',
                  backgroundGradientFrom: '#0d47a1',
                  backgroundGradientTo: '#1e88e5',
                  //decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => 'rgba(255, 255, 255, 0.5)',
                  style: {
                    borderRadius: 16
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 10,
                  paddingBottom: 10
                }}
              />

            </View>);
        })
      }



    </ScrollView>
  );

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
              <Animated.Text style={{ color, fontSize: 20 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  _renderScene = SceneMap({
    llegada: this.Llegadas,
    salida: this.Salidas,
  });
  render() {
    //<Text>{this.state.persons.map(person => person.name)}</Text>

    return (
      <View style={styles.container}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        
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
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: "rgba(0,0,0,0.95)",
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  h4: {
    color: '#fff',
    backgroundColor: '#0d47a1',
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    borderRadius: 5,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    textAlign: 'center',
  },
  divider:{ 
    backgroundColor: '#1e80ff', 
    height: 2, 
    marginBottom: 9, 
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%'
  }
});

export default History;
