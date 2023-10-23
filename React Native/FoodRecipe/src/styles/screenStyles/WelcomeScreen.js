import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colorSet from '../../themes/colors';
import { FontFamily, fontSet } from '../../themes/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: fontSet.t5,
      color: colorSet.red,
      letterSpacing: 3,
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      margin: 3
    },
    title: {
      fontSize: fontSet.t9,
      color: colorSet.red,
      letterSpacing: 6,
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      margin: 3,
      textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
      textShadowOffset: { width: 0, height: 4 }, // Shadow offset (x, y)
      textShadowRadius: 4 // Shadow blur radius
    },
    textContainer: {
      position: 'absolute', // This makes sure the text is positioned above the image
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: FontFamily.latoB
    },
    image: {
      width: wp('100%'), // applied to Image
      height: hp('100%')
    },
    welcomeButton: {
      backgroundColor: colorSet.black,
      padding: 15,
      borderRadius: 6,
      marginTop: 38,
      cursor: 'pointer'
    },
    buttonText: {
      color: colorSet.white, // Text color of the button
      fontSize: fontSet.t5,
      fontWeight: 'bold',
      letterSpacing: 4,
      fontFamily: FontFamily.robotoB
    }
  });