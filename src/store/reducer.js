import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA

} from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState
  switch(action.type) {
    case INPUT_VALUE_CHANGE:
      newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    case ADD_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list = [...state.list, state.inputValue]
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
      newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    case GET_INIT_DATA:
      newState = JSON.parse(JSON.stringify(state))
      newState.list = action.value
      return newState
    default:
      return state
  }
}