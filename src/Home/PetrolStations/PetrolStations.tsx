import React, { useState, useEffect } from "react";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import MapView, { Marker } from 'react-native-maps';
import { Dimensions, View, StyleSheet, Text } from 'react-native';

import * as Location from 'expo-location';

let stations = [];

const PetrolStations = ({ navigation }: HomeNavigationProps<"PetrolStations">) => {
  // start
  // location permision
  // useEffect(async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //     return;
  //   }

  //   let locationResponse = await Location.getCurrentPositionAsync({});
  //   setLocation(locationResponse);
  // }, []);

  //handle user location
  const handleUserLocation = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});

    if (currentLocation != null && Math.round(region.latitude) !== Math.round(currentLocation.coords.latitude) && Math.round(region.longitude) !== Math.round(currentLocation.coords.longitude)) {
      setRegion({
        latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0121,
      });
    }
  }


  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // petrol stations api

  const petrolPrices = async () => {
    try {
      await fetch(
        "https://95yehb6zv9.execute-api.us-east-1.amazonaws.com/"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(Object.keys(data.stations).length);
          console.log(data)
          for (let i = 0; i < Object.keys(data.stations).length; i++) {
            stations.push({
              stationName: data.stations[i].name,
              petrolPrice: data.prices[i].price,
              petrolType: data.prices[i].fueltype,
              latitude: data.stations[i].location.latitude,
              longitude: data.stations[i].location.longitude
            });
          }
          return;
        });
    }
    catch (err) {
      console.log(err);
    }
  }
  setTimeout(petrolPrices, 1000);
  // end
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Petrol Stations"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
      />
      <View>
        <MapView onUserLocationChange={e => {
          setTimeout(handleUserLocation, 5000);
        }}
          showsUserLocation={true}
          region={region}
          mapPadding={{ top: 20, right: 20, bottom: 30, left: 20 }}
          showsMyLocationButton={true}
          style={styles.map}
          provider="google"
        >
          {
            stations.map((station, index) => (
              <Marker
                key={index}
                title={station.stationName}
                coordinate={{ latitude: station.latitude, longitude: station.longitude }}
              >
                <View style={{ padding: 5 }}>
                  <Text>{station.petrolPrice}</Text>
                </View>
              </Marker>
            ))

          }
        </MapView>
      </View>
    </Box >
  );
};
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PetrolStations;
