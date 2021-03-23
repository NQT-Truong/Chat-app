import React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

// Icon
import BottomBar, {_listTab} from './BottomBar/BottomBar';

import {colors} from "../utils/scaling";

// Auth
import Login      from '../Screens/Auth/Login';
import Register   from '../Screens/Auth/Register';
import Dashboard  from '../Screens/Dashboard/Dashboard';
import Profile    from '../Screens/Profile/Profile';
import UserOnline from '../Screens/UserOnline/UserOnline';

// Bottom Navigation
const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            activeColor="red"
            barStyle={{backgroundColor: 'white'}}
            initialRouteName="Dashboard"
            tabBarOptions={{
                showLabel: true,
            }}
            tabBar={props => <BottomBar{...props} />}>
            {_listTab.map(({name, screen}, index) => (
                <Tab.Screen key={index} name={name} component={screen} />
            ))}
        </Tab.Navigator>
    );
};

// AuthStack
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {

    const listScreen = [
        {
            name: 'Login',
            screen: Login,
        },
        {
            name: 'UserOnline',
            screen: UserOnline,
        },
        {
            name: 'Register',
            screen: Register,
        },
    ];

    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                listScreen.map(({name, screen}, index) => (
                    <AuthStack.Screen
                        key={index}
                        name={name}
                        component={screen}
                    />
                ))
            }
        </AuthStack.Navigator>
    );
};

// RootStack
const RootStack = createStackNavigator();

const listDashboardScreenWithoutBottomNavigator = [
    {
        name: 'Dashboard',
        screen: Dashboard,
    },
    {
        name: 'Profile',
        screen: Profile
    }
];

const RootStackScreen = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{headerShown:null}}
            />
            {listDashboardScreenWithoutBottomNavigator.map(
                ({name, screen}, index) => (
                    <RootStack.Screen
                        key={index}
                        name={name}
                        component={screen}
                        options={{
                            headerStyle: {backgroundColor: colors.whiteColor},
                            headerTitleStyle: {
                                color: colors.fontBlackColor,
                                // shadowColor: 'transparent',
                                shadowOpacity: 0,
                                shadowRadius: 0,
                                shadowOffset: {
                                    height: 0,
                                },
                                elevation: 0,
                                borderBottomWidth: 0,
                            },
                            headerTintColor: colors.fontBlackColor,
                            // headerTitleContainerStyle: {},
                            title: name,
                            cardStyleInterpolator:
                            CardStyleInterpolators.forHorizontalIOS,
                            headerStyleInterpolator:
                            HeaderStyleInterpolators.forUIKit,
                        }}
                    />
                ),
            )}
        </RootStack.Navigator>
    );
};

const AppNavigator = () => {
    const user = useSelector(state => state.user);

    const navigateWifiSetting = () => {
        // pass
    };

    React.useEffect(() => {

        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                // console.log("ok");
            } else {
                Alert.alert('No connection', 'Turn on your wifi or 3G/4G', [{
                    text: 'OK',
                    onPress: navigateWifiSetting,
                }]);
            }
        });

    }, []);

    return (
        <NavigationContainer>
            {
                user.uuid
                    ?
                    <RootStackScreen/>
                    :
                    <AuthStackScreen/>
            }
        </NavigationContainer>
    );
};

export default AppNavigator;
