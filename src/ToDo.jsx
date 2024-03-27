import React, {useState} from "react";

function ToDo() {

    const [tasks, setTasks] = useState(["A", "B", "C"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInput(e) {
        setNewTask(e.target.value);
    }

    function handleTasks() {
        if (newTask.trim() !== "") { 
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleDelete(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function handleDown(index) {
        if (index < tasks.length -1) {
            const updatedTask = [...tasks];
            [updatedTask[index+1], updatedTask[index]] = [updatedTask[index], updatedTask[index+1]];
            setTasks(updatedTask);
        }
    }



    return(
        <div>
            <h1>To-Do-List</h1>

            <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInput}
            />

            <button onClick={handleTasks}>Add</button>
            <ol>
                {tasks.map((task, index) => 
                    <li keys={index}>
                        {task}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleUp(index)}>Up</button>
                        <button onClick={() => handleDown(index)}>Down</button>
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDo