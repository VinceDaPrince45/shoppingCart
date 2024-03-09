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

    const removeItemFromCart = (itemName) => {
        const updatedCartItems = cart.filter(item => item.name !== itemName);
        setCart(updatedCartItems);
    }

    const decrementItem = (itemName) => {
        const itemIndex = cart.findIndex(item => item.name === itemName);
        // if item found in cart
        if (itemIndex != -1) {
            const updatedCartItems = [...cart];
            if (updatedCartItems[itemIndex].count > 1) {
                updatedCartItems[itemIndex] = {
                    ...updatedCartItems[itemIndex],
                    count: updatedCartItems[itemIndex].count - 1
                };
                setCartItems(updatedCartItems);
            } else {
                removeItemFromCart(itemName);
            }
        }
    }

    const displayCart = cart.map((item) => <li>{item.name} - Quantity: {item.count}</li>);

    return (
        <div>
            <div>
                <div>Current Cart:</div>
                <ul>
                    {displayCart}
                </ul>
            </div>
            <Outlet cart={cart} setCart={setCart} addToCart={addItemToCart} />
        </div>
    );
    // will need to pass the cart and setCart as components to Outlet so each rendered component will be able to access the cart
    // ex. <Outlet cart={cart} setCart={setCart} addToCart={addItemToCart} />
}

export default ShoppingCart;