import { useState,useEffect } from "react"
import { Outlet } from "react-router-dom";

const ShoppingCart = () => {
    const [cart,setCart] = useState([]);
    // add objects to array consisting of name and count

    const addItemToCart = (itemName) => {
        const itemIndex = cart.findIndex(item => item.name === itemName);

        if (itemIndex != -1) {
            // item already in cart
            const updatedCartItems = [...cart];
            updatedCartItems[itemIndex] = {...updatedCartItems[itemIndex],count:updatedCartItems[itemIndex].count+1};
            setCart(updatedCartItems);
        } else {
            // item not yet in cart
            setCart([...cart, {name:itemName, count:1}]);
        }
    }

    const displayCart = cart.map((item) => <li>{item.name} - Quantity: {item.count}</li>);

    return (
        <div>
            <div>
                <div>Current Card:</div>
                <ul>
                    {displayCart}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default ShoppingCart;