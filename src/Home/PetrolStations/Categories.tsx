import React from "react";
import { ScrollView, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFDDDD",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#BEECC4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView> */}
      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          // setRegion({
          //   latitude: details.geometry.location.lat,
          //   longitude: details.geometry.location.lng,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // })
        }}
        query={{
          key: "AIzaSyAQ4ktjsCdThDxuJGfH7VyBE2UqRYZlu_A",
          language: 'en',
          components: "country:us",
          types: 'establishment',
          radius: 30000,
          // location: `${region.latitude}, ${region.longitude}`
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
          listView: { backgroundColor: "white" }
        }}
      />
    </View>
  );
};

export default Categories;
