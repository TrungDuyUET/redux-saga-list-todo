import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector,} from 'react-redux'

// import 'antd/dist/antd.css';

import {
  getInputValueChangeAction, 
  getAddItemAction,
  getDeleteItemAction,
  getInitListAction
} from '../store/createActions'


const TodoList = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const inputValueChange = (e) => {
    const action = getInputValueChangeAction(e.target.value)
      dispatch(action)
  }
  const handleAddItem = () => {
    const action = getAddItemAction()
    dispatch(action)
  }
  const handleDeleteItem = (index) => {
    const action = getDeleteItemAction(index)
    dispatch(action)
  }
  useEffect(()=>{
    // props.getInitList()
    const action = getInitListAction()
      dispatch(action)
  },[])

    console.log(state);
    return (
      <div style={{marginTop:50, marginLeft:50}}>
        <div class="input-group mb-3">
          <input type="text" class="form-control" 
                  style={{width:"400", marginRight:10}}
                  value={state.inputValue}
                  onChange={inputValueChange}/>
          <div class="input-group-append">
            <button class="btn btn-primary" 
                    type="button" id="button-addon2"
                    onClick={handleAddItem}>Add</button>
          </div>
        </div>
        {state.list && state.list.map((listItem, index) =>{
            return (
              <div className="border mt-3 -auto d-flex justify-content-between" style={{ marginRight:10, height:30}}>
                <div className="my-auto" key={index}>{listItem}</div>
                <button onClick={() => {handleDeleteItem(index)}} className="btn btn-warning">Delete</button>
              </div>
            )
        })}
        
      </div>
      
    )
  }

export default TodoList