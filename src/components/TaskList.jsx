//aca se importa el use context para poder usar el context globar
import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";
import {Link} from "react-router-dom"


const TaskList = () => {
    // asi se usa
    const {tasks,deleteTask,toggleTaskDone} = useContext(GlobalContext)
    console.log(tasks);
    
    return (
        <div className="flex justify-center">
            {/* <button onClick={deleteTask}>delete all </button> */}
            {/* ojo aca pone parentecis y devuelve un jsx sin usar un retur */}
             <div className="w-6/12">
             {tasks.map((task) => (
                
                <div key={task.id}  className="bg-gray-900 px-20 py-5 shadow-2x1 mb-4 flex justify-between">
                   <div className="">
                   <h1>{task.title}</h1>
                    <h6>{task.id}</h6>
                    <p>{task.description}</p>
                    <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2" onClick={()=>{toggleTaskDone(task.id)}}>
                        {task.done?'Undone':'done'}
                    </button>
                   </div>
                   <div className="">
                       <button onClick={()=>{deleteTask(task.id)}} className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2">delete</button>
                       <Link to={`/edit/${task.id}`} className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2" >edit</Link>
                   </div>
                </div>
            ))}

             </div>
            
        </div>
    )
}

export default TaskList
