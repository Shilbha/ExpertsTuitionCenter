import { StyleSheet } from "react-native";
import { exp } from "react-native-reanimated";



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop:100,
    },
    headTitle: {
      fontSize: 24,
      marginBottom: 50,
    },
    subTitle:{
        fontSize:14,
        color:"gray",
        marginTop: -45,
        paddingBottom:50


    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 0,
      borderRadius: 10,
      marginBottom: 30,
      paddingLeft: 10,
      backgroundColor: '#D0D7E9',
    },
    button: {
      backgroundColor: '#1C0E57',
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
  
    },
    box:{
     
    }
  });

export default styles;