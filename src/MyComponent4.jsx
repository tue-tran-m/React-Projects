import React, {useState} from "react";

function MyComponent4() {

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        
        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemoveCar(index) {
        setCars(c => c.filter((_,i) => i !== index));
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
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li keys={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYear} />

            <input type="text" value={carMake} onChange={handleMake} 
            placeholder="Enter car make"/>

            <input type="text" value={carModel} onChange={handleModel} 
            placeholder="Enter car model"/>

            <button onClick={() => handleAddCar()}>Add Car</button>
        </>);
}
export default MyComponent4