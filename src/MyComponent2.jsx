import React, {useState} from "react";

function MyComponent2() {
    
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});
    
    function handleYear(e) {
        setCar(c => ({...car, year: e.target.value}));
    }

    function handleMake(e) {
        setCar(c => ({...c, make: e.target.value}));
    }

    function handleModel(e) {
        setCar(c => ({...c, model: e.target.value}));
    }

    return(
        <>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYear} />
            <input type="text" value={car.make} onChange={handleMake} />
            <input type="text" value={car.model} onChange={handleModel} />
        </>
    );                                
}

export default MyComponent2 