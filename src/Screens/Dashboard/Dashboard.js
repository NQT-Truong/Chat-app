import React, {useState}                                                    from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import io                                                                   from 'socket.io-client';
import {shallowEqual, useSelector}                                          from 'react-redux';
import {Avatar, Divider, Icon, Input, Text}                                 from 'react-native-elements';
import {colors, verticalScale}                                              from '../../utils/scaling';
import apiMess                                                              from '../../Api/Message/Message';

const Dashboard = () => {
    // define
    const user = useSelector(state => state.user, shallowEqual);
    const roomName = '0000';
    const socket = io
    (
        // "http://18.139.208.99:3333",
        'http://192.168.1.48:3333',
        {
            transports: ['websocket',
                'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'],
        },
    );
    const scrollView = React.useRef();

    // state
    const [messMe, setMessMe] = useState('');
    const [messAll, setMessAll] = useState([]);

    // lifecycle
    React.useEffect(() => {
        apiMess.getListMess({
            roomName,
        }, (err, result) => {
            if (err) {
                // console.log(err);
            } else {
                result.forEach((dt) => {
                    setMessAll(prevState => {
                        prevState = JSON.parse(JSON.stringify(prevState));
                        return ([
                            ...prevState,
                            {
                                data: dt.content,
                                id: dt.user,
                            },
                        ]);
                    });
                });
            }
        });
    }, []);

    React.useEffect(() => {
        socket.emit('Sign', {
            username: user.username,
            uuid: user.uuid,
        });

        socket.on("mess_from_server", (dt) => {
            if (dt.id === user.username) return null;
            setMessAll(prevState => {
                prevState = JSON.parse(JSON.stringify(prevState));
                return ([
                    ...prevState,
                    dt
                ]);
            });
        });
    }, [user]);
    // ------------------------------------------- //

    // function
    const handleChange = (value) => {
        setMessMe(value);
    };
    const sendMess = () => {
        socket.emit('create_room', {
            roomName: roomName,
            user: {
                username: user.username,
                avatar: user.avatar,
                uuid: user.uuid,
            },
        });
        setMessAll(prevState => {
            prevState = JSON.parse(JSON.stringify(prevState));
            return ([
                ...prevState,
                {
                    data: messMe,
                    id: user.username,
                },
            ]);
        });
        socket.emit('mess_from_client', {data: messMe, id: user.username});

        setMessMe('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.frameTextUser}>
                <Avatar
                    icon={{name: 'rocket', color: colors.redColor, type: 'font-awesome'}}
                    rounded
                />
                <Text style={styles.textUserStyle}>
                    Quang Truong
                </Text>
            </View>
            <Divider style={styles.dividerStyle}/>
            <ScrollView
                ref={scrollView}
                onContentSizeChange={()=>{scrollView.current.scrollToEnd({animated: true});}}
            >
                {
                    messAll.map((dt, index) => (
                        <View style={styles.frameMess} key={index}>
                            <View style={dt.id === user.username ? styles.hiddenStyle : styles.messLeft}>
                                <Text style={styles.textMessStyle}>{dt.id !== user.username ? dt.data : ''}</Text>
                            </View>
                            <View style={dt.id === user.username ? styles.messRight : styles.hiddenStyle}>
                                <Text style={styles.textMessStyle}>{dt.id === user.username ? dt.data : ''}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <View style={styles.frameInput}>
                <Input
                    placeholder="Nhập tin nhắn"
                    containerStyle={styles.containerStyleInput}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    value={messMe}
                    onChangeText={handleChange}
                />
                <TouchableOpacity
                    style={styles.frameIconSend}
                    onPress={sendMess}
                >
                    <Icon
                        name='paper-plane'
                        type='font-awesome'
                        size={verticalScale(25)}
                        color={colors.themeColorAnswerBlueActive}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    frameTextUser: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: verticalScale(5),
        alignItems: 'center',
    },
    textUserStyle: {
        fontWeight: 'bold',
        fontSize: verticalScale(18),
        marginLeft: verticalScale(5),
    },
    hiddenStyle: {
        maxWidth: '50%',
        justifyContent: 'center',
        paddingHorizontal: verticalScale(3),
    },

    dividerStyle: {
        backgroundColor: colors.blueColor,
    },

    frameMess: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        minHeight: verticalScale(40),
        paddingHorizontal: verticalScale(5),
        marginBottom: verticalScale(5),

    },
    textMessStyle: {
        color: colors.whiteColor,
        fontSize: verticalScale(13),
    },
    messLeft: {
        maxWidth: '50%',
        justifyContent: 'center',
        paddingHorizontal: verticalScale(5),
        borderWidth: verticalScale(1),
        borderRadius: verticalScale(10),
        backgroundColor: colors.goldBrownColor,
        borderColor: colors.goldBrownColor,
    },
    frameText: {
        borderWidth: verticalScale(1),
        flexDirection: 'row',
    },
    messRight: {
        maxWidth: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: verticalScale(5),
        borderWidth: verticalScale(1),
        borderRadius: verticalScale(10),
        backgroundColor: colors.pinkColor,
        borderColor: colors.pinkColor,
    },


    // input
    frameInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalScale(5),
        paddingTop: verticalScale(5)
    },
    containerStyleInput: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputContainerStyle: {
        borderBottomWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: verticalScale(-24),
    },
    inputStyle: {
        borderWidth: verticalScale(1),
        borderColor: colors.fontGreyColor,
        borderRadius: verticalScale(6),
    },
    frameIconSend: {
        width: '15%',
        paddingRight: verticalScale(10),
    },
});

export default Dashboard;
