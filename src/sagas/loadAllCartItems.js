import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

import { FETCH_ALL_ITEMS} from "../actions/cartActions";
import makeApiRequest from '../utils/apiRequest';


export function* fetchfetchAllCartItems() {
  try {
    const response = yield makeApiRequest();
    if(!response) throw  new Error("Sorry!!!!! Something went wrong! Please, Try again");
    yield put({type: 'LOADED_ALL_ITEMS',  payload: response});
  }
  catch(err){
    yield put({type: 'CART_ITEMS_FETCH_ERROR', err})
  }
}

function* fetchAllCartItemsThread() {
  yield takeLatest(FETCH_ALL_ITEMS, fetchfetchAllCartItems);
}

export default fetchAllCartItemsThread;

