import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from '../../component/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../statics/styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import AppPermission from '../../utils/AppPermission';

const Settings = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items] = useState([
    { label: 'English', value: 'en' },
    { label: 'हिंदी', value: 'hi' },
  ]);


  return (
    <View style={styles.container}>

      <AppPermission />

      <View style={styles.lngicon1}>
        <Ionicons style={styles.icon} name='location-outline' size={28} color='yellow' />
        <CustomButton style={styles.cstmBtn} text={'Location'} stylee={styles.cstmBtnTxt} onPress={() => navigation.navigate('Location')} />
      </View>

      <View style={styles.lngicon1}>
        <Ionicons style={styles.icon} name='person-outline' size={28} color='yellow' />
        <CustomButton style={styles.cstmBtn} text={'Edit Profile'} stylee={styles.cstmBtnTxt} onPress={() => navigation.navigate('Edit Profile')} />
      </View>

      <View style={styles.lngicon}>
        <Ionicons style={styles.icon} name='language-outline' size={28} color='yellow' />
        <DropDownPicker
          placeholder={t('language')}
          defaultValue="English"
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          itemStyle={styles.dropdownItem}
          dropDownStyle={styles.dropdown}
          labelStyle={styles.dropdownLabel}
          open={open}
          items={items}
          value={value}
          setValue={setValue}
          setOpen={setOpen}
          onChangeValue={(lan) => {
            i18n.changeLanguage(lan);
          }}
        />
      </View>
    </View>
  )
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    // 
    flex: 1,
    backgroundColor: 'black',
  },

  lngicon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  lngicon1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginLeft: 20,
    marginTop: 11,
  },
  permissionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: 'black',
  },
  permissionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    color: "white",
    marginLeft: 30,
    fontSize: 15
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  cstmBtn: {
    backgroundColor: colors.bg,
    borderColor: colors.drvoilet,
    marginRight: 10,
    borderWidth: 1,
  },
  cstmBtnTxt: {
    color: colors.black, alignSelf: 'flex-start', marginLeft: 10
  },
  dropdown: {
    width: '85%',
    backgroundColor: colors.bg,
    borderColor: colors.drvoilet,
    borderWidth: 1,
    marginLeft: 40,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },

  dropdownLabel: {
    fontSize: 16,
    fontFamily: 'Itim-Regular',
    color: colors.black,
  },
})