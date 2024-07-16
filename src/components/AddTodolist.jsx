import React, { useCallback, useContext, useEffect, useState } from 'react'
import Todocontext from '../context/Todocontext';
import Todocontextprovider from '../context/Todocpntextprovider';
import Todolist from './Todolist';


function AddTodolist() {

  const [todoValue, settodoValue] = useState('');
  const [todos, settodos] = useState([]);

  const {addTodos,setaddTodos} = useContext(Todocontext);
  
  // console.log("🚀 ~ localValue:", forListValue);
  console.log('addTodos------------>>>>>',addTodos);

  let getLocalValue = localStorage.getItem("todos");
  let forListValue = JSON.parse(getLocalValue);
  let addTodoArray = forListValue ? forListValue : todos;


  const addTodoValues = (e) => {
    e.preventDefault();    
    // console.log("🚀 ~ localValue:", forListValue);
    // console.log("🚀 ~ addTodoValues ~ todos:------>>>>>>>>>>", addTodoArray)
    if(todoValue !== "" || (forListValue?.length == 0 || forListValue?.length > 0)){
      settodos([{id: Date.now(), todoValue}, ...addTodoArray]);
    }
  }  

  useEffect(() => {
    // console.log("🚀 ~ useEffect ~ forListValue:", forListValue);
    setaddTodos(addTodoArray);
    console.log("🚀 ~ addTodoValues ~ todos:", todos)
    console.log("🚀 ~ addTodoValues ~ todos:", todoValue)

    // console.log("🚀 ~ localStorageSave ~ addTodos ~ todos:--->>>>>>>>>>>>>>", addTodos)
    if(todos.length > 0){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  },[todos]);

  console.log("🚀 ~ useEffect ~ forListValue:", forListValue);
  // console.log("🚀 ~ localValue ~ forListValue:", addTodos);  

  return (
    <div>
    <h1 className='text-3xl font-bold'>Simple Todo List</h1>
    <form
    // onSubmit={addTodoValues} 
    >
    <input 
    type='text'
    placeholder='Write Todo....'
    onChange={(e)=> settodoValue(e.target.value)}
    className='outline outline-offset-0.5 outline-blue-500
    outline-2 w-10/12	 h-10 rounded border-slate-950	mt-10'>
    </input>
    <button
    onClick={addTodoValues}
    type='submit'
    className='bg-green-500 text-black font-bold outline outline-offset-0.5 outline-blue-500
    outline-2 w-12 h-10 rounded ml-2'
    >Add</button>
    </form>

    {forListValue ? forListValue?.map((Element,index) => 
     <Todolist
     key={Element.id}
     Element = {Element}
     />
    ) : null}
  
    </div>
  )
}

export default AddTodolist