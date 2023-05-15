// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Platform, PermissionsAndroid } from 'react-native';
// import SwitchToggle from 'react-native-switch-toggle';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// export default function togglePermission() {
//   const [cameraToggle, setCameraToggle] = useState(false);
//   const [locationToggle, setLocationToggle] = useState(false);
//   const [notificationToggle, setNotificationToggle] = useState(false);

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       checkAndroidPermissions();
//     } else {
//       checkiOSPermissions();
//     }
//   }, []);

//   const checkiOSPermissions = async () => {
//     const cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
//     setCameraToggle(cameraStatus === RESULTS.GRANTED);

//     const locationStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//     setLocationToggle(locationStatus === RESULTS.GRANTED);

//     const notificationStatus = await check(PERMISSIONS.IOS.NOTIFICATIONS);
//     setNotificationToggle(notificationStatus === RESULTS.GRANTED);
//   };

//   const checkAndroidPermissions = async () => {
//     const cameraStatus = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
//     setCameraToggle(cameraStatus);

//     const locationStatus = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//     setLocationToggle(locationStatus);

//     const notificationStatus = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_NOTIFICATION_POLICY);
//     setNotificationToggle(notificationStatus);
//   };

//   const requestiOSPermission = async (permission) => {
//     const status = await request(permission);
//     return status === RESULTS.GRANTED;
//   };

//   const requestAndroidPermission = async (permission) => {
//     try {
//       const granted = await PermissionsAndroid.request(permission);
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (error) {
//       console.warn(error);
//       return false;
//     }
//   };

//   const handleCameraToggle = async () => {
//     if (Platform.OS === 'ios') {
//       const granted = await requestiOSPermission(PERMISSIONS.IOS.CAMERA);
//       setCameraToggle(granted);
//     } else {
//       const granted = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
//       setCameraToggle(granted);
//     }
//   };

//   const handleLocationToggle = async () => {
//     if (Platform.OS === 'ios') {
//       const granted = await requestiOSPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
//       setLocationToggle(granted);
//     } else {
//       const granted = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
//       setLocationToggle(granted);
//     }
//   };

//   const handleNotificationToggle = async () => {
//     if (Platform.OS === 'ios') {
//       const granted = await requestiOSPermission(PERMISSIONS.IOS.NOTIFICATIONS);
//       setNotificationToggle(granted);
//     } else {
//       const granted = await requestAndroidPermission(PermissionsAndroid.PERMISSIONS.ACCESS_NOTIFICATION_POLICY);
//       setNotificationToggle(granted);
//     }
//   };

//   return (
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
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   permissionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   permissionText: {
//     fontSize: 20,
//     marginRight: 20,
//   },
// });
