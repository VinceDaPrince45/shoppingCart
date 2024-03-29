import { useState,useEffect } from "react"
import { Outlet } from "react-router-dom";

function CartItem({item,remove}) {
    return (
        <li>
            x{item.count} {item.name}
            <button onClick={()=>remove(item.name)}>x</button>
        </li>
    );
}

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
                setCart(updatedCartItems);
            } else {
                removeItemFromCart(itemName);
            }
        }
    }

    const displayCart = cart.map((item) => <CartItem item={item} remove={removeItemFromCart} key={item.name}/>);

    return (
        <div className="shopping-cart">
            <ul className="framed buttons">
                <li>
                    <h3>Current Cart:</h3>
                </li>
                <ul>
                    {displayCart}
                </ul>
            </ul>
            <Outlet context={[addItemToCart,decrementItem]}/>
        </div>
    );
    // will need to pass the cart and setCart as components to Outlet so each rendered component will be able to access the cart
    // ex. <Outlet cart={cart} setCart={setCart} addToCart={addItemToCart} />
}

export default ShoppingCart;