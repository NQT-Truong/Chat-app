import * as types from "../constants";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
    case types.INTERESTS_CHANGE:
        return action.interests;
    case types.INTERESTS_CLEAR:
        return initialState;
    default:
        return state;
    }
}
