// import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
// import { Linking, Platform } from 'react-native';
// import { useState } from 'react';


// const PLATFORM_LOCATION_PERMISSIONS = {
//     android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
// }
// const PLATFORM_MICROPHONE_PERMISSIONS = {
//     android: PERMISSIONS.ANDROID.RECORD_AUDIO
// }

// const REQUEST_PERMISSION_TYPE = {
//     location: PLATFORM_LOCATION_PERMISSIONS,
//     microphone: PLATFORM_MICROPHONE_PERMISSIONS
// }

// const PERMISSIONS_TYPE = {
//     location: 'location',
//     microphone: 'microphone'

// }

// const checkPermission = async (type) => {

//     console.log("AppPermission checkPermission type ", type)
//     const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
//     console.log("AppPermission checkPermission permissions ", permissions)
//     if (!permissions) {
//         return true
//     }
//     try {
//         const result = await check(permissions)
//         console.log("AppPermission checkPermission result", result)
//         if (result == RESULTS.GRANTED) return true
//         return requestPermission(permissions)
//     } catch (error) {
//         console.log("AppPermission checkPermission error", error)
//         return false
//     }
// }

// const requestPermission = async (permissions) => {
//     console.log("AppPermission requestPermission permissions ", permissions)
//     try {
//         const result = await request(permissions)
//         console.log("AppPermission requestPermission result", result)
//         return result === RESULTS.GRANTED
//     } catch (error) {
//         console.log("AppPermission requestPermission error", error)
//         return false
//     }
// }

// const locationButton = () => {
//     if (requestPermission === RESULTS.DENIED) {
//         if (Platform.OS === 'ios') {
//             const openSetting = () => {
//                 Linking.openSettings().catch(() => {
//                     Alert.alert('Unable to open settings');
//                 });
//             };
//             Alert.alert(
//                 'Turn on Location Services to allow s-kaupat to determine your location.',
//                 '',
//                 [{ text: 'Go to Settings', onPress: openSetting }, { text: 'Dismiss' }],
//             );
//         } else {
//             // android setting
//             Linking.openSettings();
//         }
//     } else {
//         console.log('you are good to go');

//     }
// };

// // const GetLocation = () => {
// //     const [location, setLocation] = useState(false);
// //     const result = requestPermission();
// //     result.then(res => {
// //         console.log('res is:', res);
// //         if (res) {
// //             Geolocation.getCurrentPosition(
// //                 position => {
// //                     console.log(position)
// //                     setLocation(position)
// //                 },
// //                 error => {
// //                     console.log(error.code, error.message);
// //                     setLocation(false);
// //                 },
// //                 { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
// //             )
// //         }
// //     });
// //     console.log(location)
// // }



// // const Permission = new AppPermission();
// export { checkPermission, PERMISSIONS_TYPE, locationButton, requestPermission }

//--------------------------------------------------------------------------------------------------------------------------------------//

import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { check, PERMISSIONS, request, RESULTS, PermissionsAndroid, } from 'react-native-permissions';
import SwitchToggle from 'react-native-switch-toggle';

//Import required components and permissions
//Import the required components and permissions for Android
const AppPermission = () => {
const cameraPermission =
    Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA;
const locationPermission =
    Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
const notificationPermission =
    Platform.OS === 'ios'
        ? PERMISSIONS.IOS.NOTIFICATIONS
        : PERMISSIONS.ANDROID.POST_NOTIFICATIONS;

//Define the state variables for the permission toggles and their corresponding permissions
const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
const [cameraToggle, setCameraToggle] = useState(false);
const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
const [locationToggle, setLocationToggle] = useState(false);
const [notificationPermissionGranted, setNotificationPermissionGranted] = useState(false);
const [notificationToggle, setNotificationToggle] = useState(false);

//Check the permissions on mount and update the state variables accordingly

useEffect(() => {
  check(cameraPermission)
    .then((result) => {
      setCameraPermissionGranted(result === RESULTS.GRANTED);
      setCameraToggle(result === RESULTS.GRANTED);
    })
    .catch((error) => console.log(error));

  check(locationPermission)
    .then((result) => {
      setLocationPermissionGranted(result === RESULTS.GRANTED);
      setLocationToggle(result === RESULTS.GRANTED);
    })
    .catch((error) => console.log(error));

  check(notificationPermission)
    .then((result) => {
      setNotificationPermissionGranted(result === RESULTS.GRANTED);
      setNotificationToggle(result === RESULTS.GRANTED);
    })
    .catch((error) => console.log(error));
}, []);


//Handle the toggle events for each permission toggle

  const handleCameraToggle = async () => {
    if (cameraPermissionGranted) {
      setCameraPermissionGranted(false);
      setCameraToggle(false);
    } else {
      const result = await request(cameraPermission);
      setCameraPermissionGranted(result === RESULTS.GRANTED);
      setCameraToggle(result === RESULTS.GRANTED);
    }
  };
  
  const handleLocationToggle = async () => {
    if (locationPermissionGranted) {
      setLocationPermissionGranted(false);
      setLocationToggle(false);
    } else {
      const result = await request(locationPermission);
      setLocationPermissionGranted(result === RESULTS.GRANTED);
      setLocationToggle(result === RESULTS.GRANTED);
    }
  };
  
  const handleNotificationToggle = async () => {
    if (notificationPermissionGranted) {
      setNotificationPermissionGranted(false);
      setNotificationToggle(false);
    } else {
      const result = await request(notificationPermission);
      setNotificationPermissionGranted(result === RESULTS.GRANTED);
      setNotificationToggle(result === RESULTS.GRANTED);
    }
  };
  

//Finally, we can render the UI with the permission toggles and their corresponding state variables
return (
    <View style={styles.container}>
      <Text style={styles.header}>Permissions</Text>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Camera</Text>
        <SwitchToggle
          switchOn={cameraToggle}
          onPress={handleCameraToggle}
          backgroundColorOn="#4cd137"
          backgroundColorOff="#ecf0f1"
          circleColorOff="#bdc3c7"
          circleColorOn="#f5f6fa"
          duration={500}
        />
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Location</Text>
        <SwitchToggle
          switchOn={locationToggle}
          onPress={handleLocationToggle}
          backgroundColorOn="#4cd137"
          backgroundColorOff="#ecf0f1"
          circleColorOff="#bdc3c7"
          circleColorOn="#f5f6fa"
          duration={500}
        />
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Notifications</Text>
        <SwitchToggle
          switchOn={notificationToggle}
          onPress={handleNotificationToggle}
          backgroundColorOn="#4cd137"
          backgroundColorOff="#ecf0f1"
          circleColorOff="#bdc3c7"
          circleColorOn="#f5f6fa"
          duration={500}
        />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    permissionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      paddingHorizontal: 20,
      width: '100%',
    },
    permissionText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default AppPermission;


    
    