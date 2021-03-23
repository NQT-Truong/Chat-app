import React                                      from 'react';
import {colors, Icon}                             from 'react-native-elements';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import propTypes                                  from 'prop-types';

import Dashboard       from '../../Screens/Dashboard/Dashboard';
import Profile         from '../../Screens/Profile/Profile';
import {verticalScale} from '../../utils/scaling';
import UserOnline      from '../../Screens/UserOnline/UserOnline';

export const _listTab = [
    {
        name: 'Dashboard',
        label: 'Home',
        icon: 'home',
        screen: Dashboard,
        iconType: 'font-awesome',
    },
    {
        name: 'UserOnline',
        label: 'UserOnline',
        icon: 'users',
        screen: UserOnline,
        iconType: 'font-awesome',
    },
    {
        name: 'Profile',
        label: 'Profile',
        icon: 'user',
        iconType: 'font-awesome',
        screen: Profile,
    },
];

const _defaultIconSize = 25;

const BottomIcon = React.memo(({onPress, name, isFocused}) => {
    const handlePress = React.useCallback(() => {
        if (!isFocused) {
            onPress(name);
        }
    }, [isFocused]);

    const renderIcon = React.useMemo(() => {
        return (
            <Icon
                name={_listTab.find(tab => tab.name === name).icon}
                size={_defaultIconSize}
                color={isFocused ? colors.primary : colors.grey0}
                type={_listTab.find(tab => tab.name === name).iconType}
            />
        );
    }, [isFocused]);

    const getColorLabel = React.useCallback(() => {
        return isFocused ? colors.primary : colors.grey0;
    }, [isFocused]);

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.buttonIconTouchContainer}
        >
            <View style={styles.buttonIconContainer}>
                <Icon
                    name={_listTab.find(tab => tab.name === name).icon}
                    size={_defaultIconSize}
                    type={_listTab.find(tab => tab.name === name).iconType}
                    style={styles.iconPlaceholder}
                />
                <View style={styles.iconContainer}>
                    {renderIcon}
                </View>
            </View>
            <View style={styles.labelContainer}>
                <Text style={[styles.label, {color: getColorLabel()}]}>
                    {_listTab.find(tab => tab.name === name).label}
                </Text>
            </View>
        </TouchableOpacity>
    );
});

BottomIcon.propTypes = {
    onPress: propTypes.func.isRequired,
    name: propTypes.string.isRequired,
    isFocused: propTypes.bool.isRequired,
};

const BottomBar = ({state, navigation}) => {
    const onPress = React.useCallback(name => {
        navigation.navigate(name);
    }, []);

    return (
        <View style={styles.container}>
            {state.routes.map((d, i) => (
                <BottomIcon
                    key={i}
                    onPress={onPress}
                    name={d.name}
                    isFocused={state.index === i}
                />
            ))}
        </View>
    );
};

BottomBar.propTypes = {
    state: propTypes.object.isRequired,
    navigation: propTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        height: verticalScale(_defaultIconSize * 2),
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
    },
    buttonIconTouchContainer: {
        width: '33%',
    },
    buttonIconContainer: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    iconPlaceholder: {
        opacity: 0,
    },
    iconContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    labelContainer: {
        alignItems: 'center',
        width: '100%',
    },
    label: {
        fontSize: verticalScale(11),
    },
});

export default BottomBar;

