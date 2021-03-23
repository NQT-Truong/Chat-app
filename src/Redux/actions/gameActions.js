import * as types from "../constants";

export const gameChange = game => ({
    type: types.GAME_CHANGE,
    game
});

export const gameClear = () => ({
    type: types.GAME_CLEAR
});

