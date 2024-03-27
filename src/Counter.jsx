import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);
    
    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => { 
        setCount(c => c = 0);
    }

    const increment = () => {
        setCount(c => c + 1);
    }

    return(
        <div className="container">
            <p className="count">{count}</p>
            <button className="decrement" onClick={decrement}>Decrement</button>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="increment" onClick={increment}>Increment</button>
        </div>);
}

export default Counter