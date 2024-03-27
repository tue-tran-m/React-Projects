
import React, {useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function hanldeColor(e) {
        setColor(e.target.value);
    }

    return(
        <div className="color-container">
            <h1 className="title">Color Picker</h1>
            <div className="container" style={{backgroundColor: color}}>
                <p>Selectet Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={hanldeColor} />
        </div>
    );
}

export default ColorPicker