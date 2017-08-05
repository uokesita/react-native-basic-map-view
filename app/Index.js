/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

const {width, height} = Dimensions.get('window');

export default class Index extends Component {
  constructor(){
    super();
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      }
    }
  }

  calcDelta(lat, lon, accuracy){
    const oneDegreeOfLogitudeInMeters = 111.32;
    const circumference = (40075 / 360);

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLogitudeInMeters;

    this.setState({
      region:{
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      }
    })
  }

  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const accuracy = position.coords.accuracy

      this.calcDelta(lat, lon, accuracy)
    })
  }

  marker(){
    return{
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.region.latitude ?<MapView
          style={styles.map}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate = {this.marker()}
            title = "Im here!"
            description = "Home"
          />
        </MapView>: null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    width: width
  }
});