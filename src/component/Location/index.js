import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const initialRegion = {
  latitude: 28.622872,
  longitude: 77.382845,
  latitudeDelta: 0.0421,
  longitudeDelta: 0.0421,
};

const LocationComponent = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState(initialRegion);

  const handlePlaceSelect = (data, details) => {
    // Access the selected place data and details
    console.log(data, details);

    // Update the map region or add a new marker based on the selected place
    const { geometry } = details;
    const { location } = geometry;

    const selectedMarker = {
      latitude: location.lat,
      longitude: location.lng,
    };

    setMarkerCoordinates(selectedMarker);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.mapStyle} initialRegion={initialRegion}>
        <Marker
          coordinate={markerCoordinates}
          title="You"
          description="Your Current Location"
        />
      </MapView>

      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={handlePlaceSelect}
          query={{
            key: 'AIzaSyBQwPk7g1tewgbxt365GDeTNQ_a4uj7Ao0',
            language: 'en',
          }}
          fetchDetails
          onFail={error => console.log(error)}
          onNotFound={() => console.log('No results')}
          predefinedPlaces={[
            // Predefined places
          ]}
          renderRow={(rowData, index, isPredefinedPlace) => (
            <View style={styles.rowContainer}>
              <Text style={isPredefinedPlace ? styles.predefinedPlaceText : styles.suggestedPlaceText}>
                {rowData.description}
              </Text>
            </View>
          )}
          styles={styles.autocompleteStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    zIndex: 1,
  },
  rowContainer: {
    padding: 10,
  },
  suggestedPlaceText: {
    color: 'blue',
  },
  predefinedPlaceText: {
    color: 'green',
  },
  autocompleteStyle: {
    container: {
      position: 'absolute',
      top: 10,
      left: 10,
      right: 10,
    },
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      backgroundColor: '#1faadb',
      color: '#fff',
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  },
});

export default LocationComponent;
