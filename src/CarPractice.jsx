import React, {useState} from "react";

function Car() {

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAdd() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        
        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemove(index) {
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleYear(e) {
        setYear(e.target.value);
    }

    function handleMake(e) {
        setMake(e.target.value);
    }

    function handleModel(e) {
        setModel(e.target.value);
    }

    return(
        <>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) => 
                    <li keys={index} onClick={() => handleRemove(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={handleYear} /> <br />
            <input type="text" placeholder="Enter the car make" value={carMake} onChange={handleMake} /> <br />
            <input type="text" placeholder="Enter the car model" value={carModel} onChange={handleModel} /> <br />
            <button onClick={handleAdd}>Add Car</button>
        </>);
}

export default Car