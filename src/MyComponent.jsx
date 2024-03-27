import React, {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [number, setNumber] = useState("1");
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleName(e) {
        setName(e.target.value);
    }

    function handleNum(e) {
        setNumber(e.target.value);
    }

    function handleComment(e) {
        setComment(e.target.value);
    }

    function handlePayment(e) {
        setPayment(e.target.value);
    }

    function handleShipping(e) {
        setShipping(e.target.value);
    }

    return(
        <>
            <input value={name} onChange={handleName}></input>
            <p>Name: {name}</p>

            <input value={number} onChange={handleNum}></input>
            <p>Quantity: {number}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping} />Pick Up
            </label> <br />

            <label>
                <input type="radio" value="Shipping" checked={shipping === "Shipping"} onChange={handleShipping} />Shipping
            </label> <br />

            <p>Shipping: {shipping}</p>

        </>
    );

}

export default MyComponent