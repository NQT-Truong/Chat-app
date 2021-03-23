import Toast from 'react-native-simple-toast';

function ToastCenterShort(message) {
    Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
}

function ToastCenterLong(message) {
    Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
}

function ToastBottomShort(message) {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
}

function ToastBottomLong(message) {
    Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
}

export {ToastCenterShort, ToastCenterLong, ToastBottomShort, ToastBottomLong};

export default {
    ToastCenterShort,
    ToastCenterLong,
    ToastBottomShort,
    ToastBottomLong,
};
