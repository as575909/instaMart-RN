import { StyleSheet } from "react-native";
import colors from "../../statics/styles/colors";


export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#6A5ACD',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    width: '65%',
    margin: 12,
},
textInputStyle: {
  height: 40,
  borderRadius: 10,
  paddingLeft: 20,
  margin: 2,
  borderColor: '#009688',
  backgroundColor: colors.background,
  color: colors.black
},
});