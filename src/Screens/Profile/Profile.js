import React              from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text}     from 'react-native-elements';

import {useDispatch}   from 'react-redux';
import {userClear}     from '../../Redux/actions/userAction';
import {verticalScale} from '../../utils/scaling';

const Profile = () => {

    const dispatch = useDispatch();
    // function
    const handleLogOut = () => {
        dispatch(userClear());
    };
    return (
        <View style={styles.container}>
            <Text>
                Tính năng đang phát triển
            </Text>
            <View style={styles.frameButton}>
                <Button
                    onPress={handleLogOut}
                    title="Đăng xuất"
                    containerStyle={styles.buttonLogout}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: verticalScale(15)
    },

    frameButton: {
        width: "50%"
    },
    buttonLogout: {
        borderRadius: verticalScale(16),
        padding: verticalScale(5)
    }
});


export default Profile;
