import React, { Component, useState, useEffect } from "react"
import DisplayCart from './displaycart'


const Shop = () => {
    let [amount, setAmount] = useState(0);
    let chosenInput;
    const bananaOrder = (amount) => {
        chosenInput = document.querySelector('#banana')
        setAmount(amount + parseInt(chosenInput.value));
        chosenInput.value = undefined;
    }
    const appleOrder = (amount) => {
        chosenInput = document.querySelector('#apple')
        setAmount(amount + parseInt(chosenInput.value));
        chosenInput.value = undefined;
    }
    const kiwiOrder = (amount) => {
        chosenInput = document.querySelector('#kiwi')
        setAmount(amount + parseInt(chosenInput.value));
        chosenInput.value = undefined;
    }
    return (
        <div>
            <DisplayCart amount={amount}/>
            <div>
                this is the shop page!
            </div>
            <div>
                <p>banana for 5 dollars each, enter amount in the input</p>
                <input id="banana" type="number"></input>
                <button onClick={() => bananaOrder(amount)}>add to cart</button>
            </div>
            <div>
                <p>apple for 5 dollars each, enter amount in the input</p>
                <input id="apple" type="number"></input>
                <button onClick={() => appleOrder(amount)}>add to cart</button>
            </div>
            <div>
                <p>kiwi for 5 dollars each, enter amount in the input</p>
                <input id="kiwi" type="number"></input>
                <button onClick={() => kiwiOrder(amount)}>add to cart</button>
            </div>
        </div>
    );
}

export default Shop;