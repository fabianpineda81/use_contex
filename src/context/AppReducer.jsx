export default function appReducer(state, action) {

    switch (action.type) {
        case "ADD_TASK":
            return { tasks: [...state.tasks, action.payload] }
        case "DELETE_TASK":
            
            return { tasks: state.tasks.filter(task => task.id !== action.payload) }

        case "UPDATE_TASK":
            const updatedTask = action.payload
            const resultado = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    task.title = updatedTask.title
                    task.description = updatedTask.description
                }

                return task
            })
            return {
                tasks: resultado
            }

        case "TOGGLE_TASK_DONE":
            const id = action.payload
            console.log(id);
            
            const updatedTasks= state.tasks.map((task)=>{
                if(task.id===id){
                   task={...task,done:!task.done}
                  /*  console.log(task.done);
                   task.done= !task.done
                   console.log(task.done); */
                }
                return task
            }
            )
            console.log(updatedTasks);
            return {
                tasks: updatedTasks
            }
            
            

        default:
            return state
            
    }



}