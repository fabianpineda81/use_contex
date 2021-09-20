// esto es como el controller de los estados de la aplicaccion movil



// esto se importa para poder crear el contexto 
import { createContext,useReducer } from "react";
// aca se llama al reducer que se va a utilizar
import appReducer from "./AppReducer";
// aca se crea el contexto y se exporta 
import {v4} from 'uuid';



const initialState = {
    tasks: [
        {
            id: "1",
            title: "titulo 1 ",
            description: "una descripcion",
            done: false
        }
        ,
        {
            id: "2",
            title: "titulo 2",
            description: "una descripcion2",
            done: false
        }
    ]
}

export const GlobalContext = createContext(initialState)
// esto sirve para pintar los hijos (los hijos son aquellos componentes que estan dentro de otro )
// ajemplo
//<div>
// hijo
//</div> 

// esta funcion es la que añade la tarea 
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const addTask = (task) => {
        // console.log(task);
        // aca le mando accion al reducer 
        dispatch({type:'ADD_TASK',payload:{...task,id:v4()}})
    }


    const deleteTask=(id)=>{
        dispatch({type:'DELETE_TASK',payload:id})
    }

    const updateTask=( task)=>{
        dispatch({type:"UPDATE_TASK",payload:task})
    }

    const toggleTaskDone= id=>{
        dispatch({type:"TOGGLE_TASK_DONE", payload:id})
    }

    // el provaider le comparte el estado a los hijos que esta renderizando 
    // en el value solo puede ir un objeto
    // se cambien el initial stato por el state del reducer el cual tiene el stado de la aplicacion 

    //  return <GlobalContext.Provider value={{...initialState, addTask}   } >
    return <GlobalContext.Provider value={{...state, addTask,deleteTask,updateTask,toggleTaskDone}   } >
        {children}
    </GlobalContext.Provider>
}
