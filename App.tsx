import React,{useEffect} from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation/Navigation';
import {store, persistor} from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {
  requestLocationPermission,
  requestCameraPermission,
  requestStoragePermission,
  requestNotificationPermission,
} from './src/utils/AppPermission';

 import messaging from '@react-native-firebase/messaging';

const App = () => {

  useEffect(() => {

    askPermission();
    //getDeviceToken();
    
  }, [])

  const getDeviceToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    } catch (error) {
      console.log('Error getting FCM token:', error);
    }
  };

  const askPermission = async () => {
    await requestLocationPermission();
    await requestCameraPermission();
    await requestStoragePermission();
    await requestNotificationPermission();
  };

  return(
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Navigation />
      </PersistGate>
    </Provider>
  );
  
};


export default App;




















































// {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/45/45010.png' }}
//  style={{
//   height: 50, 
//   width: 50,
//    opacity: 0.7, 
//    alignItems: 'center', 
//    borderWidth: 1, 
//    borderColor: '#fff', 
//    borderRadius: 10 
//    }}>

// </Image> */} 