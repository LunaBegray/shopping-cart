import React from 'react'
import { Link } from 'react-router-dom';

const DisplayCart = ({amount}) => {
    return (
        <div>
            <div>
                {"amount of items in cart: " + amount}
            </div>
            <button> place order</button>
        </div>

    );
}

export default DisplayCart;