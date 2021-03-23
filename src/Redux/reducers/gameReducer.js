import * as types from "../constants";

const initialState = {
    code: "",
    uuid: "",
    name: "",
    gameType: 1,
    gameState: 0,
    started: "",
    expiry: "",
    answers: [],
    lastModified: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.GAME_CHANGE:
            return {
                ...state,
                ...action.game
            };
        case types.GAME_CLEAR:
            return initialState;
        default:
            return state;
    }
}
