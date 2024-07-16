import React, { useContext, useEffect, useState } from 'react'
import Todocontext from '../context/Todocontext';
import AddTodolist from './AddTodolist';
let value ;
function Todolist({
  Element
}) {

    const {addTodos, setaddTodos} = useContext(Todocontext);

    console.log("🚀 ~ AddTodolist ~ Element:------>>>", Element);
    const [todoValue, setEditTodo] = useState(Element?.todoValue);
    const [todoEditable, setTodoEditable] = useState(true);
    const [saveBtn, setSaveBtn] =  useState(false);
    const [updatetodos, setUpdatetodos] = useState([]);


    const onEditTodos = (todosId) => {
      setTodoEditable(false);
      setSaveBtn(true);
    }

    
    let getLocalValue = localStorage.getItem("todos");
    let forListValue = JSON.parse(getLocalValue);


    const onUpdateTodos = (todosId) => {
      // todosId.preventDefault();    
      console.log("🚀 ~ onUpdateTodos ~ todosId:", todosId);
      console.log("🚀 ~ onUpdateTodos ~ Element:", todoValue);

      if(todosId){
        forListValue?.map((element,index)=>{
            if(todosId == element.id){
              forListValue[index].todoValue = todoValue;
            }
        })
        console.log("🚀 ~ onUpdateTodos ~ forListValue:", forListValue)

        localStorage.setItem("todos",JSON.stringify(forListValue) );
        setTodoEditable(true);
        setSaveBtn(false);
       }

    }

    const onDeleteTodos = (todosId) =>{
      console.log("🚀 ~ onDeleteTodos ~ todosId:", todosId);

        if(todosId){
          forListValue?.map((element, index)=>{
            if(todosId == element.id){
              console.log("🚀 ~ addTodos?.map ~ index:", index)
              forListValue.splice(index, 1);
            }
          })
        }
        console.log("🚀 ~ forListValue?.map ~ forListValue:", forListValue)
        localStorage.setItem("todos",JSON.stringify(forListValue));
        setaddTodos(forListValue);
    }


    // useEffect(()=>{
    //   setaddTodos(forListValue);
    // },[todoValue])

  // console.log('here--->');
  
  return (
    <div>
     { Element?.id ? <ul
      key={Element?.id}
     >
      <li
      key={Element?.id}

      className='flex flex wrap'
     >
      <input 
      type='text'
      // placeholder={Element.todoValue}
      readOnly = {todoEditable}
      value={todoValue}
      onChange={(e)=> setEditTodo(e.target.value) }
      className='outline outline-offset-0.5 outline-blue-500
      outline-2 w-2/3 break-words h-10 bg-gray-500 rounded border-slate-950	mt-10 ml-32'>
      </input>
      <div
      className='mt-10'
      >
      {!saveBtn ? <button
      onClick={() => onEditTodos(Element.id)}
      className=' text-center bg-green-500 text-black font-bold outline outline-offset-0.5 outline-blue-500
      outline-2 w-14 h-10 rounded ml-1'
      >Edit</button> : null}

      { saveBtn ? <button
      onClick={() => onUpdateTodos(Element.id)}
      className=' text-center bg-green-500 text-black font-bold outline outline-offset-0.5 outline-blue-500
      outline-2 w-14 h-10 rounded ml-1'
      >Update</button> : null}

      <button
      onClick={() => onDeleteTodos(Element.id)}
       className='bg-red-500 text-black font-bold outline outline-offset-0.5 outline-blue-500
       outline-2 w-14 h-10 rounded ms-4'
       >Delete</button>
      </div>
      </li>
     </ul> : null}
    </div>
  )
}

export default Todolist;