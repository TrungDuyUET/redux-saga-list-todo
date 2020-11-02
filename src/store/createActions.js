import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA,
  GET_INIT_LIST
} from '../store/actionTypes'

const getAddItemAction = (value) => ({
  type: ADD_ITEM,
  value
})

const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

const getInitDataAction = (value) => ({
  type: GET_INIT_DATA,
  value
})

const getInitListAction = () => ({
  type: GET_INIT_LIST
})

export {
  getAddItemAction,
  getDeleteItemAction,
  getInitDataAction,
  getInitListAction
}