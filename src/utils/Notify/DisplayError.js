import {Alert} from 'react-native';

const _errorMessage = {};

const _listKey = Object.keys(_errorMessage);

const _defaultTitle = 'BookingApp';

function findSameKey(key) {
    if (key) {
        let findKey = _listKey.find(dt => dt === key);
        if (findKey === undefined) {
            findKey = _listKey.find(dt => dt.includes(key));
        }
        return findKey;
    }

    return null;
}

export default function displayError(error, options = {}) {
    if (error.response) {
        if (error.response.data._error_message) {
            const key = findSameKey(error.response.data._error_message);
            let message = '';
            if (key) {
                message = _errorMessage[key];
            } else {
                message = error.response.data._error_message;
            }
            Alert.alert(_defaultTitle, message);
        } else {
            const message = error.response.data.toString();
            Alert.alert(_defaultTitle, message);
        }
    } else {
        if (error) {
            Alert.alert(_defaultTitle, error.toString());
        } else {
            Alert.alert(_defaultTitle, 'Somethings is wrong!');
        }
    }
}
