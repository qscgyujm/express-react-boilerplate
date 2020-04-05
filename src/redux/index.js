/* eslint no-shadow: "off" */
import { takeLatest, put, all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

// State
const initialState = {
  isTest: false,
};

//  Action
const ActionType = {
  FETCH_REQUEST: 'FETCH_REQUEST',
  FETCH_FAILURE: 'FETCH_FAILURE',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export const action = {
  fetch: () => ({ type: ActionType.FETCH_REQUEST }),
  fetchFailure: () => ({ type: ActionType.FETCH_FAILURE }),
  fetchSuccess: () => ({ type: ActionType.FETCH_SUCCESS }),
};

// Saga

function* fetchSaga() {
  try {
    console.log('FETCH_REQUEST');

    yield put(action.fetchProductSuccess());
  } catch (error) {
    yield put(action.fetchProductSuccess());
  }
}

export const saga = [
  takeLatest(ActionType.FETCH_REQUEST, fetchSaga),
];

// Reducer

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionType.FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export function* rootSaga() {
  yield all([
    ...saga,
  ]);
}

export const rootReducer = combineReducers({
  reducer,
});
