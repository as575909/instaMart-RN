import { Text, View } from "react-native";
import React, { useState } from "react";
import Strings from '../../statics/Strings';
import { webImgs } from "../../assets/images";
import { styles } from "./index.style";
import { useSelector } from 'react-redux';
import UserAvatar from "../../component/UserAvatar";
import SocialButton from "../../component/SocialButton";
import HomeHeadNav from '../../component/HomeHeadNav';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import MyButton from "../../component/MyButton";
import MyText from "../../component/MyText";
import { WebView } from 'react-native-webview';
import ImagePicker from 'react-native-image-crop-picker';
import { useTranslation } from "react-i18next";

const About = () => {
  const profileImage = useSelector(state => state.profile.profileImage);
  const [image, setImage] = useState(webImgs.avatarMale);
  const [search, setSearch] = useState('');
  const userName = useSelector((state) => state.user);
  const phoneNumber = 'tel:${1234567890}';
  const emailAddress = 'mailto:as575909@gmail.com';
const {t} = useTranslation();

  return (
    <SafeAreaView>
    <View>
      <HomeHeadNav searchChange={() => ("")} search={search} />
      <ScrollView>
    <View style={styles.aboutContainer}>
      <MyText style={styles.mainHeader}>{userName.data[0].Name}</MyText>
      <MyText style={styles.paraStyle}>{t("about_user_title")}</MyText>

      <UserAvatar userImg={profileImage} />
      <View style={styles.btnCtn}>
      {/* <MyButton onPress={takePhotoFromCamera} text={t("about_tkphoto_btn")} />
      <MyButton style={{marginLeft: 10}} onPress={choosePhotoFromLibrary} text={t("about_chgllry_btn")} /> */}
      </View>

      <View style={styles.aboutLayout}>
        <MyText style={styles.aboutSubHeader}> {t("about")} </MyText>
        <MyText style={[styles.paraStyle, styles.aboutPara]}>{t("home_description")} </MyText>
      </View>
      {/* <WebView
      source={{ uri: 'https://reactnative.dev/docs/intro-react-native-components' }}
      style={{ flex: 1 }}
      onLoad={() => console.log('Web page loaded')}
    /> */}
      <MyText style={styles.mainHeader}> {t("about_follow_title")} </MyText>
      <View style={styles.menuContainer}>
        <SocialButton url={Strings.user_instagram} icon={webImgs.instagram} />
        <SocialButton url={Strings.user_linkedIn} icon={webImgs.linkedIn} />
        <SocialButton url={Strings.user_github} icon={webImgs.gitHub} />
        <SocialButton url={phoneNumber} icon={webImgs.gitHub} />
        <SocialButton url={emailAddress} icon={webImgs.gitHub} />
      </View>
      
    </View>
    </ScrollView>
    </View>
    
    </SafeAreaView>
  );
};
export default About;