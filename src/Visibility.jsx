import React, {useState} from "react";

function Visibility() {

    const [isVisible, setVisible] = useState(false);

    const visible = () => {
        setVisible(!isVisible);
    }



    return (
        <>
            <button onClick={visible}>Click me</button>
            {visible && <p>Now You See Me</p>}
        </>
    )
}

export default Visibility