// import React, { useState, useEffect } from 'react';
// import { View, Text, Switch } from 'react-native';
// import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// import SwitchToggle from 'react-native-switch-toggle';

// //Import required components and permissions
// //Import the required components and permissions for Android
// const Profile = () => {
// const cameraPermission =
//     Platform.OS === 'ios'
//         ? PERMISSIONS.IOS.CAMERA
//         : PERMISSIONS.ANDROID.CAMERA;
// const locationPermission =
//     Platform.OS === 'ios'
//         ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//         : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
// const notificationPermission =
//     Platform.OS === 'ios'
//         ? PERMISSIONS.IOS.NOTIFICATIONS
//         : PERMISSIONS.ANDROID.ACCESS_NOTIFICATION_POLICY;

// //Define the state variables for the permission toggles and their corresponding permissions
// const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
// const [cameraToggle, setCameraToggle] = useState(false);
// const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
// const [locationToggle, setLocationToggle] = useState(false);
// const [notificationPermissionGranted, setNotificationPermissionGranted] = useState(false);
// const [notificationToggle, setNotificationToggle] = useState(false);

// //Check the permissions on mount and update the state variables accordingly
// useEffect(() => {
//     check(cameraPermission)
//       .then((result) =>
//         setCameraPermissionGranted(result === RESULTS.GRANTED)
//       )
//       .catch((error) => console.log(error));
  
//     check(locationPermission)
//       .then((result) =>
//         setLocationPermissionGranted(result === RESULTS.GRANTED)
//       )
//       .catch((error) => console.log(error));
  
//     check(notificationPermission)
//       .then((result) =>
//         setNotificationPermissionGranted(result === RESULTS.GRANTED)
//       )
//       .catch((error) => console.log(error));
//   }, []);

// //Handle the toggle events for each permission toggle
//   const handleCameraToggle = async () => {
//     if (!cameraPermissionGranted) {
//       const result = await request(cameraPermission);
//       setCameraPermissionGranted(result === RESULTS.GRANTED);
//       setCameraToggle(result === RESULTS.GRANTED);
//     } else {
//       setCameraPermissionGranted(false);
//       setCameraToggle(false);
//     }
//   };
  
//   const handleLocationToggle = async () => {
//     if (!locationPermissionGranted) {
//       const result = await request(locationPermission);
//       setLocationPermissionGranted(result === RESULTS.GRANTED);
//       setLocationToggle(result === RESULTS.GRANTED);
//     } else {
//       setLocationPermissionGranted(false);
//       setLocationToggle(false);
//     }
//   };
  
//   const handleNotificationToggle = async () => {
//     if (!notificationPermissionGranted) {
//       const result = await request(notificationPermission);
//       setNotificationPermissionGranted(result === RESULTS.GRANTED);
//       setNotificationToggle(result === RESULTS.GRANTED);
//     } else {
//       setNotificationPermissionGranted(false);
//       setNotificationToggle(false);
//     }
//   };

// //Finally, we can render the UI with the permission toggles and their corresponding state variables
// return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Permissions</Text>
//       <View style={styles.permissionContainer}>
//         <Text style={styles.permissionText}>Camera</Text>
//         <SwitchToggle
//           switchOn={cameraToggle}
//           onPress={handleCameraToggle}
//           backgroundColorOn="#4cd137"
//           backgroundColorOff="#ecf0f1"
//           circleColorOff="#bdc3c7"
//           circleColorOn="#f5f6fa"
//           duration={500}
//         />
//       </View>
//       <View style={styles.permissionContainer}>
//         <Text style={styles.permissionText}>Location</Text>
//         <SwitchToggle
//           switchOn={locationToggle}
//           onPress={handleLocationToggle}
//           backgroundColorOn="#4cd137"
//           backgroundColorOff="#ecf0f1"
//           circleColorOff="#bdc3c7"
//           circleColorOn="#f5f6fa"
//           duration={500}
//         />
//       </View>
//       <View style={styles.permissionContainer}>
//         <Text style={styles.permissionText}>Notifications</Text>
//         <SwitchToggle
//           switchOn={notificationToggle}
//           onPress={handleNotificationToggle}
//           backgroundColorOn="#4cd137"
//           backgroundColorOff="#ecf0f1"
//           circleColorOff="#bdc3c7"
//           circleColorOn="#f5f6fa"
//           duration={500}
//         />
//       </View>
//     </View>
//   );
  
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#fff',
//     },
//     header: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//     },
//     permissionContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       marginVertical: 10,
//       paddingHorizontal: 20,
//       width: '100%',
//     },
//     permissionText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//   });
  

// export default Profile;