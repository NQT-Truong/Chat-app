import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (width / guidelineBaseWidth) * size;

const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

const colors = {
    lightGreen: "#01ff14",
    primaryOrangeColor: "#ff550a",
    whiteColor: 'white',
    primaryBlackColor: "#2a2a2a",
    secondaryBlackColor: '#3c3c3c',
    primaryGreenColor: '#1DB20D',
    lightRedColor: '#e40923',
    primaryRedColor: '#fe0000',
    darkRedColor: '#880000',
    darkRedColor2: '#bd0007',
    fontBlackColor: '#212121',
    fontGreyColor: '#949393',
    placeholderTextColor: '#d7d6d6',
    greenColor: '#11b000',
    brownishColor: '#e9e9af',
    orangeColor: '#ff8852',
    darkOrangeColor: '#a45a31',
    greyLinesColor: '#e1e1e1',
    lightGrayColor: '#fafafa',
    redColor: '#e51c23',
    goldColor: '#eeb43e',
    goldBrownColor: '#c69435',
    purpleColor: '#9649b5',
    blackColor: '#000',
    blueColor: '#0024c0',
    facebookColor: '#32689d',
    darkmagentaColor: '#890b3a',
    pinkColor: '#7f35c0',
    topTabInactiveTintColor: '#8c8c8c',
    topTabBackgroundColor: '#CACACA',
    successStatus: '#4caf50',
    pendingStatus: '#f0ad4e',
    errorStatus: '#c9302c',
    backgroundGrey: '#fafafa',
    // Theme color
    indigo: "#3F51B5",
    boldIndigo: "#4B0082",
    themeColorFacebook: "#3b5998",
    themeColorGoogle: "#dc4e41",
    themeColorAnswerBlue: "#3e70db",
    themeColorAnswerBlueActive: "#2f56f4",
    themeColorAnswerRed: "#e52e64",
    themeColorAnswerRedActive: "#bf2c58",
    themeColorAnswerOrange: "#fbbc05",
    themeColorAnswerOrangeActive: "#dea505",
    themeColorAnswerGreen: "#34a853",
    themeColorAnswerGreenActive: "#2e8c46",
    themeColorDefault: "#2bbbad",
    themeColorAnswerPrimary: "#4285f4",
    themeColorAnswerSecondary: "#a6c",
    themeColorAnswerSuccess: "#00c851",
    themeColorAnswerWaring: "#fb3",
    themeColorAnswerDanger: "#ce0012",
    themeColorAnswerInfo: "#33b5e5",

};

export {scale, verticalScale, colors , moderateScale};
