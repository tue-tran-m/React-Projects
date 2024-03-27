import React, {useState, useRef, useEffect} from "react";

function Stop() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) { 
            intervalIdRef.current = setInterval(() => {
                setElapsed(Date.now() - startTimeRef.current);
            }, 10);
        }

        return() => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsed;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsed(0);
    }

    function formatTime() {
        let hours = Math.floor(elapsed / (1000 * 60 * 60));
        let minutes = Math.floor(elapsed / (1000 * 60) % 60);
        let seconds = Math.floor(elapsed / (1000) % 60);
        let milliseconds = Math.floor((elapsed % 1000) /10);

        return(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`);
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div>
            <p>{formatTime()}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stop