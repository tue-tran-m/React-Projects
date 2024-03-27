
import React, {useState} from "react";

function FoodPr() {

    const [foods, setFoods] = useState(["A", "B", "C"]);
    const [newFood, setNewFoods] = useState("");

    function handleInput(e) {
        setNewFoods(e.target.value);
    }
    
    function handleAdd() {
        if(newFood.trim() !== "") {
            setFoods(f => [...f, newFood]);
            setNewFoods("");
        }
    }

    function handleRemove(index) {
        setFoods(foods.filter((_,i) => i !== index));
    }

    return (
        <>
            <h1>List of Food</h1>
            <ul>
                {foods.map((food, index) =>
                    <li keys={index} onClick={() => handleRemove(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" value={newFood} placeholder="Enter food name" onChange={handleInput}/>
            <button onClick={handleAdd}>Add Food</button>
        </>
    );
}

export default FoodPr