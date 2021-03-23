import * as types from "../constants";

export const interestsChange = interests => ({
    type: types.INTERESTS_CHANGE,
    interests
});

export const interestsClear = () => ({
    type: types.INTERESTS_CLEAR
});


