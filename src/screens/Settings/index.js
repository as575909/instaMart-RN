import { View } from 'react-native'
import React, { useState, } from 'react'
import CustomButton from '../../component/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { styles } from './index.style';
import TogglePermission from '../../component/TogglePermission';

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

      <TogglePermission />

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

