import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import colors from "../../statics/styles/colors";

export const styles = StyleSheet.create({
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