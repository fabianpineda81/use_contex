import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router-dom";


const TaskForm = () => {
    // aca me traigo la funcion de añadir tarea que viene desde el global contex
    // tambien puedo traer las tareas
    const { addTask, tasks,updateTask } = useContext(GlobalContext)

    const history = useHistory();
    const params = useParams()


    const [task, settask] = useState({
        id: "",
        title: "",
        description: ""
    })

    const handleChangue = e => {
        settask({
            ...task,
            [e.target.name]: e.target.value
        })

    }
    const handelSubmit = e => {
        e.preventDefault()

        if (task.id) {
            updateTask(task)
        }else{
            addTask(task)
        }
        history.push("/")

    }
    useEffect(() => {
        const taskFound = tasks.find(task => task.id === params.id)
        console.log(taskFound);
        if (taskFound) {
            settask(taskFound)
            console.log("editando")
        }
    }, [params.id, tasks])
    return (
        <div className="flex justify-center items-center h-3/4">
            <form className="bg-gray-900 p-10" onSubmit={handelSubmit}>
                <h2 className="mb-7 text-3x1">{
                    task.id ? "editing a task" : "creating a task"
                }</h2>
                <div className="mb-5">
                    <input type="text"
                        name="title"
                        onChange={handleChangue}
                        value={task.title}
                        placeholder="write a title"
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full" />

                </div>
                <div className="mb-5">
                    <textarea
                        name="description"
                        rows="2"
                        onChange={handleChangue}
                        value={task.description}
                        placeholder="write a description"
                        className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"></textarea>
                </div>
                <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
                    {
                        task.id ? "editi  task" : " create task"
                    }

                </button>
            </form>

        </div>
    )
}

export default TaskForm
