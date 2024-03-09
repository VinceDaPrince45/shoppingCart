import { useState,useEffect } from "react"
import { Outlet } from "react-router-dom";

const ShoppingCart = () => {
    const [cart,setCart] = useState([]);
    // add objects to array consisting of name and count

    return (
        <div>
            <div>Current Cart:</div>
            <Outlet />
        </div>
    );
}

export default ShoppingCart;