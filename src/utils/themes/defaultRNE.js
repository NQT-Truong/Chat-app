import {Text} from 'react-native';

import {verticalScale, colors} from '../scaling';

// Fontsize

const defaultFontSize = {
    text: 13,
    title: 14
};

// Default theme for react-native-elements
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {fontSize: verticalScale(defaultFontSize.text), fontFamily: 'BalooChettan2-Regular'};

const themeRNE = {
    ListItem: {
        titleStyle: {
            fontFamily: "BalooChettan2-Regular",
        },
        subtitleStyle: {
            fontFamily: "BalooChettan2-Regular",
        }
    },
    Badge: {
        titleStyle: {
            fontFamily: "BalooChettan2-Regular",
        }
    },
    Card: {
      titleStyle: {
          fontFamily: "BalooChettan2-Regular",
      }
    },
    checkBox: {
        fontFamily: "BalooChettan2-Regular",
        textStyle: {
            fontFamily: "BalooChettan2-Regular",
        }
    },
    Button: {
        containerStyle: {
            width: '100%',
            justifyContent: 'center',
            backgroundColor: colors.indigo,
            minHeight: verticalScale(30),
        },
        buttonStyle: {
            width: '100%',
            alignItems: 'center',
            backgroundColor: colors.indigo,
        },
        titleStyle: {
            fontSize: verticalScale(defaultFontSize.text),
            fontFamily: "BalooChettan2-Regular"
        },
    },
    Text: {
        style: {
            fontFamily: "BalooChettan2-Regular",
            fontSize: verticalScale(defaultFontSize.text),
        }
    },
    Input: {
        labelStyle: {
            fontFamily: "BalooChettan2-Regular",
        },
        inputStyle: {
            fontFamily: "BalooChettan2-Regular",
        }
    },
    Tile: {
        titleStyle: {
            fontFamily: "BalooChettan2-Regular",
        }
    }
};

export default themeRNE;
