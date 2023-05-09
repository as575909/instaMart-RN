import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './index.style';
import colors from '../../../statics/styles/colors';
import { useDispatch, useSelector } from "react-redux";
import { adduser, ResetPassword, updatePassword } from '../../../redux/reducers/LoginReducer';
import { useTranslation } from "react-i18next";


const ResetPasswordScreen = ({ props, route, navigation }) => {
  const { t } = useTranslation();

  const [newPass, SetNewPass] = useState();
  const [CreatenewPass, SetCreateNewPass] = useState();
  const userData = useSelector((state) => state.user);
  console.log(userData);

  const { phoneNumber } = route.params;
  // const phoneNumber = useSelector((state) => state.confirm);
  console.log(phoneNumber, " here is Phone Number")
  let currentUser = userData.data.find((item) => item.Number === phoneNumber);
  console.log("qwerty", currentUser);

  const dispatch = useDispatch();
  const OnSave = () => {
    const newObj = {
      "Email": userData.data[0].Email,
      "Number": userData.data[0].Number,
      "Password": newPass
    }
    if (newPass === CreatenewPass) {
      // Alert.alert("Succes to create new pass")
      dispatch(updatePassword(userData.data[0].Number, newPass));
      // console.log("reset", ResetPassword(newObj))
      alert('Password reset successfully!');
      navigation.navigate('login')
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("reset_title1")}</Text>
      <Text style={styles.subtitle}>{t("reset_title2")}</Text>
      <TextInput
        style={styles.input}
        placeholder={t("sigunup_password_placeholder")}
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={CreatenewPass}
        onChangeText={SetCreateNewPass}
      />
      <TextInput
        style={styles.input}
        placeholder={t("sigunup_cpassword_placeholder")}
        placeholderTextColor={colors.text3}
        secureTextEntry={true}
        autoCapitalize="none"
        value={newPass}
        onChangeText={SetNewPass}
      />
      <TouchableOpacity style={styles.button} onPress={() => OnSave()} >
        <Text style={styles.buttonText}>{t("reset_title1")}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ResetPasswordScreen;









