import React, { useState } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './index.style';
import InputWithIcon from '../../component/InputWithIcon';
import CustomButton from '../../component/CustomButton';
import Strings from '../../statics/Strings';
import MyText from '../../component/MyText';
import { webImgs } from "../../assets/images";
import ImagePicker from 'react-native-image-crop-picker';
import UserAvatar from '../../component/UserAvatar';
import MyButton from '../../component/MyButton';
import { useTranslation } from "react-i18next";
import Back from '../../component/Back';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../../redux/reducers/LoginReducer';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [Address, setAddress] = useState('');
  const [image, setImage] = useState(webImgs.avatarMale);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  }

  const handleSubmit = () => {
    dispatch(
      updateUserDetails({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        contactNumber: PhoneNum,
        city: Address,
      }),
    );
    Alert.alert('Profile Updated Successfully!!');
    navigation.navigate('InstaMart')
    console.log(FirstName, LastName, Email, PhoneNum, Address);
  };


  return (
    <View style={styles.container2}>
      
      <ScrollView>
        <Back />
        <View style={styles.topContainer}>
        
          {/* <MyText style={styles.subtitle}>Edit Profile</MyText> */}
          
          <UserAvatar userImg={image} />
          
          <View style={styles.btnCtn}>
            <MyButton onPress={takePhotoFromCamera} text={t("about_tkphoto_btn")} />
            <MyButton style={{ marginLeft: 10 }} onPress={choosePhotoFromLibrary} text={t("about_chgllry_btn")} />
          </View>
        </View>
        
        <View style={styles.inputout}>
          <InputWithIcon iconName="user" placeholder="FirstName" value={FirstName} onChangeText={setFirstName} />
          <InputWithIcon iconName="user" placeholder="LastName" value={LastName} onChangeText={setLastName} />
          <InputWithIcon iconName={Strings.sigunup_email_iconname} placeholder={t("sigunup_email_placeholder")} value={Email} onChangeText={setEmail} />
          <InputWithIcon iconName={Strings.sigunup_mob_iconname} placeholder={t("sigunup_mob_placeholder")} value={PhoneNum} onChangeText={setPhoneNum} />
          <InputWithIcon iconName="address-card" placeholder="Address" value={Address} onChangeText={setAddress} />
        </View>
        <CustomButton onPress={handleSubmit} text="Save" />
      </ScrollView>
    </View>
  )
}

export default EditProfile

