import React, { useState, useEffect } from "react";

function Prac1() {

    const styleInput = {  
        width: 235,
        margin: 5
    }

    const [input, setInput] = useState('');
    const [toDoList, setToDoList] = useState([]);

    function handleSubmit() {
        const itemArray = input.split(',');
        setToDoList(itemArray);
    }

    return(
        <>
            <input 
                type="text" 
                value={input}
                placeholder="Separate Items With Commas"
                style={styleInput}
                onChange={(e) => setInput(e.target.value)}
            /> <br/>
            <button onClick={handleSubmit}>Create List</button>
            <h1>My "To Do" List:</h1>
            <ul>
                {toDoList.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </>

    );
}

export default Prac1