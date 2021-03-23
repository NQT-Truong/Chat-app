import React, {useState}                        from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Text, ListItem, Avatar}                 from 'react-native-elements';
import io                                       from 'socket.io-client';
import {colors, verticalScale}                  from '../../utils/scaling';

const {width} = Dimensions.get('window');

const UserOnline = () => {
    // define
    const socket = io
    (
        // "http://18.139.208.99:3333",
        'http://192.168.1.48:3333',
        {
            transports: ['websocket',
                'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'],
        },
    );

    // State
    const [listOnline, setListOnline] = useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    // Lifecycle
    React.useEffect(() => {
        socket.on('list_online', (dt) => {
            setListOnline(dt);
        });
    }, []);

    // Function
    const handleRefresh = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const test = () => {
        // console.log('ok');
    };

    // Render
    const renderItem = ({item, index}) => (
        <ListItem key={index} style={styles.frameListItem} onPress={test}>
            <Avatar
                icon={{name: 'rocket', color: colors.redColor, type: 'font-awesome'}}
                rounded
            />
            <View>
                <ListItem.Content style={styles.subtitleView}>
                    <ListItem.Title>
                        {item.name}
                    </ListItem.Title>
                </ListItem.Content>
            </View>
        </ListItem>
    );

    const renderFlatlist = React.useMemo(() => {
        return (
            <FlatList
                data={listOnline}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                refreshing={false}
                onRefresh={handleRefresh}
                ListEmptyComponent={() => (
                    !isLoading &&
                    <View style={styles.listFooterComponent}>
                        <Text>Không có ai trực tuyến</Text>
                    </View>
                )}
            />
        );
    }, [listOnline, isLoading]);

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>
                ĐANG HOẠT ĐỘNG
            </Text>
            {renderFlatlist}
        </View>
    );
};

// const height =

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: colors.darkmagentaColor,
        fontWeight: 'bold',
        fontSize: verticalScale(15),
        marginVertical: verticalScale(5),
    },
    frameFlatList: {
        width: verticalScale(90),
    },
    listFooterComponent: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    frameListItem: {
        marginVertical: verticalScale(5),
        width: width,
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
});


export default UserOnline;
