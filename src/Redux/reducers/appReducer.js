import * as types from "../constants";

const initialState = {
    isOpenSidebar: false,
    isOpenNavbar: true,
    theme: "light",
    lastAccess: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.APP_CHANGE:
            return {
                ...state,
                ...action.app
            };
        case types.APP_CLEAR:
            return initialState;
        case types.OPEN_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: true
            };
        case types.CLOSE_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: false
            };
        case types.TOGGLE_SIDEBAR:
            return {
                ...state,
                isOpenSidebar: !state.isOpenSidebar
            };
        case types.TOGGLE_THEME:
            return {
              ...state,
              theme: state.theme === "light" ? "dark" : "light"
            };
        default:
            return state;
    }
}
