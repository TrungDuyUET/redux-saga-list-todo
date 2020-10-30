 import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects'

import {
  GET_INIT_LIST
} from './actionTypes'

import {
  getInitDataAction
} from './createActions'

import axios from 'axios'

function getData(){
    return new Promise.resolve({
        data:{
            data:["hi"]
        }
    })
}

function* getInitData() {
  try {
    const res = yield axios.get("/test.json")
    const action = getInitDataAction(res.data.data)
    yield put(action)
  } catch (error) {
    console.log('error: ', error)
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitData);
}

export default mySaga;