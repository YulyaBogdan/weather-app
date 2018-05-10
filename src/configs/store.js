import { createStore , applyMiddleware, compose} from 'redux';
import { createAction, createReducer } from 'redux-act';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./sagas";
import mySaga1 from "./sagas1";

export const fetchSearch = createAction('search city');
export const getSearch = createAction('search city fetched');

export const fetchWeather = createAction('search weather');
export const getWeather = createAction('search weather fetched');
const defaultStore = {};

const cityReducer = createReducer({
  [getSearch]: (state, payload) => payload,
  [getWeather]: (state, weatherParams) => ({...state, weatherParams})
}, defaultStore);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(cityReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);
sagaMiddleware.run(mySaga1);





