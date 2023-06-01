import React, { useState, useEffect } from 'react';
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
import { webImgs } from '../../assets/images';
import ImagePicker from 'react-native-image-crop-picker';
import UserAvatar from '../../component/UserAvatar';
import MyButton from '../../component/MyButton';
import { useTranslation } from 'react-i18next';
import Back from '../../component/Back';
import { useDispatch } from 'react-redux';
import { updateProfileImage } from '../../redux/reducers/profileSlice';
import { updateUserDetails } from '../../redux/reducers/LoginReducer';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(webImgs.avatarMale);

  useEffect(() => {
    retrieveProfileData();
  }, []);

  const storeProfileData = async () => {
    try {
      const profileData = JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNum,
        address,
        image,
      });
      await AsyncStorage.setItem('profileData', profileData);
      Alert.alert('Profile Updated Successfully!!');
      navigation.navigate('InstaMart');
    } catch (error) {
      console.log('Error storing profile data:', error);
    }
  };

  const retrieveProfileData = async () => {
    try {
      const storedProfileData = await AsyncStorage.getItem('profileData');
      if (storedProfileData) {
        const {
          firstName: storedFirstName,
          lastName: storedLastName,
          email: storedEmail,
          phoneNum: storedPhoneNum,
          address: storedAddress,
          image: storedImage,
        } = JSON.parse(storedProfileData);
        setFirstName(storedFirstName);
        setLastName(storedLastName);
        setEmail(storedEmail);
        setPhoneNum(storedPhoneNum);
        setAddress(storedAddress);
        setImage(storedImage);
      }
    } catch (error) {
      console.log('Error retrieving profile data:', error);
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      dispatch(updateProfileImage(image.path));
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      dispatch(updateProfileImage(image.path));
    });
  };

  const handleSubmit = () => {
    dispatch(
      updateUserDetails({
        firstName,
        lastName,
        email,
        contactNumber: phoneNum,
        city: address,
      })
    );
    storeProfileData();
    console.log(firstName, lastName, email, phoneNum, address);
  };

  return (
    <View style={styles.container2}>
      <ScrollView>
        <Back />
        <View style={styles.topContainer}>
          {/* <MyText style={styles.subtitle}>Edit Profile</MyText> */}
          <UserAvatar userImg={image} />
          <View style={styles.btnCtn}>
            <MyButton onPress={takePhotoFromCamera} text={t('about_tkphoto_btn')} />
            <MyButton style={{ marginLeft: 10 }} onPress={choosePhotoFromLibrary} text={t('about_chgllry_btn')} />
          </View>
        </View>
        <View style={styles.inputout}>
          <InputWithIcon iconName="user" placeholder="FirstName" value={firstName} onChangeText={setFirstName} />
          <InputWithIcon iconName="user" placeholder="LastName" value={lastName} onChangeText={setLastName} />
          <InputWithIcon iconName={Strings.sigunup_email_iconname} placeholder={t('sigunup_email_placeholder')} value={email} onChangeText={setEmail} />
          <InputWithIcon iconName={Strings.sigunup_mob_iconname} placeholder={t('sigunup_mob_placeholder')} value={phoneNum} onChangeText={setPhoneNum} />
          <InputWithIcon
            iconName="address-card" placeholder="Address" value={address} onChangeText={setAddress} />
        </View>
        <CustomButton onPress={handleSubmit} text="Save" />
      </ScrollView>
    </View>
  );
};

export default EditProfile;
