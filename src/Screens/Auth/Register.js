import React, {useState} from "react";

import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import propTypes from "prop-types";

import LinearGradient from "react-native-linear-gradient";

import {Button, Icon} from "react-native-elements";

import {useDispatch} from 'react-redux';
import apiAuth from '../../Api/Auth/Auth';
import {userChange} from '../../Redux/actions/userAction';

import {colors, verticalScale} from "../../utils/scaling";

Register.propTypes = {
    navigation: propTypes.object.isRequired,
};

function Register({navigation}) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    // function
    function handleRegister() {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        apiAuth.register({username, password, email}, (err, result) => {
            if (result) {
                setIsLoading(false);
                dispatch(userChange(result));
            } else {
                setIsLoading(false);
            }
        });
    }


    return(
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
                                Chat new
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
                            placeholder= 'Tài khoản'
                            style={styles.styleInput}
                            placeholderTextColor= '#e53242'
                        />
                    </View>
                    <View style={styles.frameInput}>
                        <TextInput
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                            placeholder="Mật khẩu"
                            style={styles.styleInput}
                            placeholderTextColor= '#e53242'
                        />
                    </View>
                    <View style={styles.frameInput}>
                        <TextInput
                            onChangeText={setEmail}
                            value={email}
                            placeholder= 'Email'
                            style={styles.styleInput}
                            placeholderTextColor= '#e53242'
                        />
                    </View>
                    <View
                        style={styles.frameButton}
                    >
                        <Button
                            containerStyle={styles.containerStyleButton}
                            buttonStyle={styles.buttomStyle}
                            loading={isLoading}
                            onPress={handleRegister}
                            title='ĐĂNG KÝ'
                            titleStyle={styles.titleButtonStyle}
                        />
                    </View>
                    <TouchableOpacity style={styles.textStyleSignUp}
                                      onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.styleTextForgotPass}>Đã có tài khoản? Đăng nhập ngay</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>

    );
}

Register.propTypes={

};
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80b5e5',
        height: '100%',
    },
    linearGradientStyle: {
        minHeight: height
    },
    // Logo
    ContainerLogo:{
        height: verticalScale(200),
        flexDirection: 'column'
    },
    styleFrameLogo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleIcon:{
        // backgroundColor: colors.redColor
    },
    styleFrameTextLogo:{
        marginTop: verticalScale(10),
    },
    styleTextLogo:{
        fontSize: verticalScale(20),
        fontWeight: 'bold'
    },
    groupSlogan: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: verticalScale(15)
    },
    sloganStyle: {
        paddingTop: verticalScale(5),
        color: colors.whiteColor,
        fontWeight: 'bold',
        fontSize: verticalScale(16)
    },

    containerForm:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    frameInput:{
        width: '80%',
        height: verticalScale(45),
        marginTop: verticalScale(20),

        flexDirection:'row',
        alignItems: 'center',

        borderRadius: verticalScale(60),
        borderColor: colors.whiteColor,

    },
    styleInput:{
        textAlign: 'center',
        width: '100%',
        backgroundColor: colors.whiteColor,
        borderRadius: verticalScale(50),
        fontSize: verticalScale(16),
    },

    frameButton:{
        width: '50%'
    },
    containerStyleButton:{
        marginTop: verticalScale(20),
        height: verticalScale(45),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(20)
    },
    buttomStyle:{
        width: '100%',
        height: '100%',
        backgroundColor: '#f6bc4d',
    },
    titleButtonStyle: {
        fontSize: verticalScale(15)
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
    }
});

export default Register;
