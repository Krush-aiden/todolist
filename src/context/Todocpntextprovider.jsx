import React, { useState } from "react";

import Todocontext from "./Todocontext";


const Todocontextprovider = ({children}) =>{
    const [addTodos, setaddTodos] = useState(null);
    return (
        <Todocontext.Provider value={{addTodos, setaddTodos}}>
            {children}
        </Todocontext.Provider>
    )
}

export default Todocontextprovider;