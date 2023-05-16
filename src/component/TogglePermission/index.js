//--------------------------------------------------------------------------------------------------------------------------------------//
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { check, PERMISSIONS, request, RESULTS, PermissionsAndroid, } from 'react-native-permissions';
import SwitchToggle from 'react-native-switch-toggle';
import colors from '../../statics/styles/colors';
import { moderateScale } from 'react-native-size-matters';
import { useTranslation } from "react-i18next";

//Import required components and permissions
//Import the required components and permissions for Android

const TogglePermission = () => {
  const { t } = useTranslation();

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
      <Text style={styles.header}>{t("permissions_title")}</Text>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>{t("permissions_title_camera")}</Text>
        <SwitchToggle
          switchOn={cameraToggle}
          onPress={handleCameraToggle}
          backgroundColorOn={colors.toggle_backgroundColorOn}
          backgroundColorOff={colors.toggle_backgroundColorOff}
          circleColorOff={colors.toggle_circleColorOff}
          circleColorOn={colors.toggle_circleColorOn}
          duration={500}
        />
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>{t("location_drawer_title")}</Text>
        <SwitchToggle
          switchOn={locationToggle}
          onPress={handleLocationToggle}
          backgroundColorOn={colors.toggle_backgroundColorOn}
          backgroundColorOff={colors.toggle_backgroundColorOff}
          circleColorOff={colors.toggle_circleColorOff}
          circleColorOn={colors.toggle_circleColorOn}
          duration={500}
        />
      </View>
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>{t("permissions_title_notification")}</Text>
        <SwitchToggle
          switchOn={notificationToggle}
          onPress={handleNotificationToggle}
          backgroundColorOn={colors.toggle_backgroundColorOn}
          backgroundColorOff={colors.toggle_backgroundColorOff}
          circleColorOff={colors.toggle_circleColorOff}
          circleColorOn={colors.toggle_circleColorOn}
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
      backgroundColor: colors.black,
    },
    header: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      marginBottom: moderateScale(20),
    },
    permissionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: moderateScale(10),
      paddingHorizontal: moderateScale(20),
      width: '100%',
    },
    permissionText: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
    },
  });
  

export default TogglePermission;


    
    