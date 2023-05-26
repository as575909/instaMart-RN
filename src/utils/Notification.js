import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import Strings from '../statics/Strings';

export const sendCheckoutNotification = async () => {  
  try {
    // Get the FCM token for the device
    const token = await messaging().getToken();

    // Send a notification with the FCM token
    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `key=${Strings.FCM_SERVER_KEY}`,
      },
      body: JSON.stringify({
        to: token,
        notification: {
          title: 'Checkout successful',
          body: 'Your order has been placed',
          sound: 'default',
        },
      }),
    });

    console.log('Notification sent:', response);
  } catch (error) {
    console.log('Error sending notification:', error);
  }
};






