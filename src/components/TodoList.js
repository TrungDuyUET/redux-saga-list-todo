import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector,} from 'react-redux'

import {
  // getInputValueChangeAction, 
  getAddItemAction,
  getDeleteItemAction,
  getInitListAction
} from '../store/createActions'


const TodoList = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const [input, setInput] = useState('');
  const inputValueChange = (e) => {
    setInput(e.target.value);
  }
  const handleAddItem = (value) => {
    const action = getAddItemAction(value)
    dispatch(action)
    setInput('');
  }
  const handleDeleteItem = (index) => {
    const action = getDeleteItemAction(index)
    dispatch(action)
  }
  useEffect(()=>{
    // props.getInitList()
    const action = getInitListAction();
    dispatch(action)
  },[])

    // console.log(state);
    return (
      <div style={{marginTop:50, marginLeft:50}}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" 
                  style={{width:"400", marginRight:10}}
                  value={input}
                  onChange={inputValueChange}/>
          <div className="input-group-append">
            <button className="btn btn-primary" 
                    type="button" id="button-addon2"
                    onClick={()=>handleAddItem(input)}>Add</button>
          </div>
        </div>
        {state.list && state.list.map((listItem, index) =>{
            return (
              <div className="border mt-3 -auto d-flex justify-content-between" key={index} style={{ marginRight:10, height:30}}>
                <div className="my-auto" >{listItem}</div>
                <button onClick={() => {handleDeleteItem(index)}} className="btn btn-warning">Delete</button>
              </div>
            )
        })}
        
      </div>
      
    )
  }

export default TodoList