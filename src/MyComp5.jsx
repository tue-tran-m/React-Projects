import React, {useState, useEffect} from "react";

function MyComp5() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return() => {
            // CLEANUP CODE
            

        }
    }, [count, color]);


    function handleAdd() {
        setCount(c => c + 1);
    }

    function handleColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}} >Count: {count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleColor}>Change Color</button>
        </>);
}

export default MyComp5