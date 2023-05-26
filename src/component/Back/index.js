import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../statics/styles/colors';
import { moderateScale } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={navigation.goBack}>
      <Icon name="chevron-left" size={25} color="black" />
    </TouchableOpacity>

  );
};

const styles =StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: colors.btnBgColor,
       borderRadius: moderateScale(5),
       paddingVertical: moderateScale(10),
       paddingHorizontal: moderateScale(0),
       justifyContent: "center",
       alignItems: "center",
       marginRight: moderateScale(320),
     },
})

export default Back;
