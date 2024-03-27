import React, {useState} from "react";


function ChangeName(props) {

    const [name, setName] = useState();

    const changeName = () => {
        setName('React Rocks!');
    }

    return(<></>);
}

export default ChangeName