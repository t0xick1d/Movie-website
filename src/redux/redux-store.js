import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'

import topFilmsReducer from './topFilmReducer'

let reducer = combineReducers({
    topFilms: topFilmsReducer
});



let store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;