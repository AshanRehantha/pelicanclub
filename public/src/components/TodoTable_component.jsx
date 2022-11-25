import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiPrimaryButton } from '../styles/components/UiButtons';
import { UiFormsInputs } from '../styles/components/UIInputs';
import { newTodoRequest, TodoUpdateRequest, todoListRequest } from '../_redux/_actions';
import { DoneIcon, RemoveIcon, Sync } from './_uicomponents/svg';


const TodoTable_component = () => {
  const actionDispatch = useDispatch();

  const { todo } = useSelector((state) => {
    return {
      todo: state.todo,
    };
  });

  const [newTodo, setNewTodo] = useState("");
  const [clickSort, setClickSort] = useState(false);

  useEffect(() => {
    actionDispatch(todoListRequest())
  },[]);


  const onClick = () => {
    const payload = {
      new_todo:newTodo,
    }
    actionDispatch(newTodoRequest(payload))
  }

  const doneTodo = (id, type) => {
    const payload = {
      id:id,
      type:type
    }
    actionDispatch(TodoUpdateRequest(payload))
  }

  const onClickSort = () => {
    if(!clickSort){
      setClickSort(true)
    }else{
      setClickSort(false)
    }
  }

  function disabledButton() {
    if(newTodo == ""){
        return true
    }else{
      return false
    }
  }

  const todoList = clickSort &&  todo.list != null ? todo.list.sort((a,b) => a.date - b.date) : todo.list;

  return (
    <React.Fragment>
        <div className='todo-todo'>
              <div className='todo-sort'>
                <button className='todo-sort-button' onClick={() => onClickSort()}>
                    <Sync/>
                </button>
              </div>
              {todoList != undefined && todoList != null ? 
                todoList.map((todos) => (
                  <div className='todo-card' key={todos.id}>
                    <p>1.0.0</p>
                    <p>{todos.task}</p>
                    <div className={todos.status == "Open" ? 'todo-status todo-status__open' : 'todo-status todo-status__done'}>
                      <p>{todos.status}</p>
                    </div>
                    <button className='icon-button' onClick={() => doneTodo(todos.id, "delete")} type={"submit"}>
                      <RemoveIcon/>
                    </button>
                    {todos.status == "Open" ? 
                      <button className='icon-button' onClick={() => doneTodo(todos.id, "update")} type={"submit"}>
                        <DoneIcon/>
                      </button> : null
                    }
                  </div>
                )) : ""
              }
          </div>
          <div>
            <UiFormsInputs
                type={"text"}
                placeholder={"New Todo"}
                maxLength={200}
                name={'new-todo'}
                value={newTodo}
                onchange={(e) => setNewTodo(e.target.value)}
            />
            <UiPrimaryButton
              type={'submit'}
              text={'Add New Todo'}
              variant="primary"
              onClick={onClick}
              disabled={disabledButton()}
            />
          </div>
    </React.Fragment>
  )
}

export default TodoTable_component