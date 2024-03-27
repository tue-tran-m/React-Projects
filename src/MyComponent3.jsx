import React, {useState} from "react";
import MyComponent2 from "./MyComponent2";

function MyComponent3() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAdd() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => ([...f, newFood]));
    }

    function handleRemove(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }



    return(
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li keys={index} onClick={() => handleRemove(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" placeholder="Enter food name" id="foodInput" />
            <button onClick={() => handleAdd()}>Add Food</button>
        </>);
}

export default MyComponent3