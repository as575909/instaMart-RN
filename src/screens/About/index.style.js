import { StyleSheet } from "react-native";
import {moderateScale} from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const containerWidth = width * 1;
const containerHeight = height * 1.1;

export const styles = StyleSheet.create({
    aboutContainer: {
      width: containerWidth,
      height: containerHeight, 
      justifyContent: 'space-between',
      alignItems: "center",
    },

    mainHeader: {
      fontSize: moderateScale(18),
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      // marginTop: 50,
      marginTop: moderateScale(10),
     // marginBottom: moderateScale(10),
      fontFamily: "Itim-Regular",
    },
    paraStyle: {
      fontSize: moderateScale(16),
      color: "#7d7d7d",
      paddingBottom: moderateScale(28),
      fontFamily: "Itim-Regular",
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: moderateScale(30),
      // marginVertical: 30,
      //marginTop: moderateScale(12),
      borderRadius: moderateScale(60),
    },
    aboutSubHeader: {
      fontSize: moderateScale(18),
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: moderateScale(15),
      fontFamily: "Itim-Regular",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
      fontSize: moderateScale(15),
      fontFamily: "Itim-Regular",
      lineHeight: moderateScale(24),
    },
    menuContainer: {
      width,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    bottomContainer:{
    // marginTop: moderateScale(40),
    },
    btnCtn:{
      flexDirection: 'row',
    },
  
    
  });