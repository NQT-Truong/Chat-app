import {combineReducers} from 'redux';

import app from './appReducer';
import user from './userReducer';
import game from './gameReducer';
import interests from './interestsReducer';

export default combineReducers({
    app,
    user,
    game,
    interests
});
