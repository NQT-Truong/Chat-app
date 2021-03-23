import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Icon} from 'react-native-elements';

import propTypes from 'prop-types';

import {useDispatch} from 'react-redux';
import {userChange}  from '../../Redux/actions/userAction';


import {colors, verticalScale} from '../../utils/scaling';

import apiAuth from '../../Api/Auth/Auth';

Login.propTypes = {
    navigation: propTypes.object.isRequired,
};

function Login({navigation}) {

    // define
    const dispatch = useDispatch();

    // state
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);

    // lifecycle
    React.useEffect(()=>{

    },[]);

    // function
    function handleLogin() {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        apiAuth.login({username, password}, (err, result) => {
            if (result) {
                setIsLoading(false);
                dispatch(userChange(result));
            } else {
                setIsLoading(false);
            }
        });
    }

    return (
        <ScrollView style={styles.container}>
            <LinearGradient
                colors={['#FC6076', '#FF9A44']}
                style={styles.linearGradientStyle}
            >
                <View style={styles.containerForm}>
                    <View style={styles.styleFrameLogo}>
                        <View style={styles.styleIcon}>
                            <Icon
                                name='ravelry'
                                type='font-awesome'
                                // color='#517fa4'
                                size={verticalScale(40)}
                            />
                        </View>
                        <View style={styles.styleFrameTextLogo}>
                            <Text style={styles.styleTextLogo}>
                                Chat New
                            </Text>
                        </View>
                        {/* <View style={styles.groupSlogan}> */}
                        {/*    <Text style={styles.sloganStyle}> */}
                        {/*        Hãy chat theo cách của bạn */}
                        {/*    </Text> */}
                        {/* </View> */}
                    </View>
                    <View style={styles.frameInput}>
                        <TextInput
                            onChangeText={setUsername}
                            value={username}
                            placeholder='Username'
                            style={styles.styleInput}
                            placeholderTextColor='#e53242'
                        />
                    </View>
                    <View style={styles.frameInput}>
                        <TextInput
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                            placeholder="Password"
                            style={styles.styleInput}
                            placeholderTextColor='#e53242'
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.frameButton}
                            onPress={handleLogin}
                        >
                            <Text style={styles.styleTextLogin}>
                                ĐĂNG NHẬP
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.textStyleForgotPass}>
                        <Text style={styles.styleTextForgotPass}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textStyleSignUp}
                                      onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.styleTextForgotPass}>Không có tài khoản? Đăng ký ngay!</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    );
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80b5e5',
        height: '100%',
    },
    linearGradientStyle: {
        minHeight: height,
    },
    // Logo
    ContainerLogo: {
        height: verticalScale(200),
        flexDirection: 'column',
    },
    styleFrameLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleIcon: {
        // backgroundColor: colors.redColor
    },
    styleFrameTextLogo: {
        marginTop: verticalScale(10),
    },
    styleTextLogo: {
        fontSize: verticalScale(20),
        fontWeight: 'bold',
    },
    groupSlogan: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: verticalScale(15),
    },
    sloganStyle: {
        paddingTop: verticalScale(5),
        color: colors.whiteColor,
        fontWeight: 'bold',
        fontSize: verticalScale(16),
    },

    containerForm: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    frameInput: {
        width: '80%',
        height: verticalScale(45),
        marginTop: verticalScale(20),

        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: verticalScale(60),
        borderColor: colors.whiteColor,

    },
    styleInput: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(50),
        fontSize: verticalScale(16),
        color: colors.blackColor
    },

    buttonContainer: {
        marginTop: verticalScale(20),
        width: '50%',
        height: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameButton: {
        borderRadius: verticalScale(20),
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6bc4d',
    },
    styleTextLogin: {
        color: colors.whiteColor,
        fontSize: verticalScale(15),
        fontWeight: 'bold',
    },

    textStyleForgotPass: {
        marginTop: verticalScale(30),
        textAlign: 'center',
    },
    styleTextForgotPass: {
        color: colors.whiteColor,
        fontSize: verticalScale(15),
    },
    textStyleSignUp: {
        marginTop: verticalScale(16),
    },
});

export default Login;
