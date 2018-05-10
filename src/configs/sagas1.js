import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchWeather, getWeather} from "./store";
import Api1 from "../services/Api1";

function* fetchW (action){
  try {
    const city  = yield call(Api1.fetchWeatherFromApixu, action.payload);
    yield put(getWeather(city));
  } catch (e) {
    console.log(e.message);
  }
}

export function* mySaga1() {
  yield takeEvery(fetchWeather.getType(), fetchW);
}

export default mySaga1;