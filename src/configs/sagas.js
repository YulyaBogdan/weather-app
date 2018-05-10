import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchSearch, getSearch} from './store';
import Api from '../services/Api';

function* fetchCity(action) {
  try {
    const city  = yield call(Api.fetchCityFromMapbox, action.payload);
    yield put(getSearch(city));
  } catch (e) {
    console.log(e.message);
  }
}

function* mySaga() {
  yield takeEvery(fetchSearch.getType(), fetchCity);
}

export default mySaga;