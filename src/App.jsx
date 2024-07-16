import { useCallback, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodolist from './components/AddTodolist'
import Todocontextprovider from './context/Todocpntextprovider'

import Todocontext from './context/Todocontext'
import Todolist from './components/Todolist'


function App() {
  return (
    <>
    <Todocontextprovider>
    <AddTodolist/>
    <Todolist/>
    </Todocontextprovider>
    </>

  )
}

export default App
