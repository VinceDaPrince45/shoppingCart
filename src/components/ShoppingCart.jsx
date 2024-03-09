import { useState,useEffect } from "react"
import { Outlet } from "react-router-dom";

const ShoppingCart = () => {
    const [cart,setCart] = useState([]);
    // add objects to array consisting of name and count

    const addItemToCart = (itemName) => {
        const itemIndex = cart.findIndex(item => item.name === itemName);
        console.log(cart);

        if (itemIndex != -1) {
            // item already in cart
            const updatedCartItems = [...cart];
            updatedCartItems[itemIndex] = {...updatedCartItems[itemIndex],count:updatedCartItems[itemIndex]+1};
            setCart(updatedCartItems);
        } else {
            // item not yet in cart
            setCart([...cart, {name:itemName, count:1}]);
        }
    }

    return (
        <div>
            <div>
                <div>Current Card:</div>
                <ul>
                    {cart.map((item) => {
                        <li>
                            {item.name} - Quantity: {item.count}
                        </li>
                    })}
                </ul>
                <button onClick={() => addItemToCart("Shoes")}>Add Shoes</button>
                <button onClick={() => addItemToCart("Shirt")}>Add Shirt</button>
            </div>
            <Outlet />
        </div>
    );
}

export default ShoppingCart;