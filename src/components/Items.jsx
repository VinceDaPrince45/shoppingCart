import { Link, useOutletContext } from "react-router-dom";
import { useState,useEffect } from "react";

function ItemInput({name,add,remove}) {
    return (
        <li>
            {name}
            <button onClick={()=>add(name)}>+1</button>
            <button onClick={()=>remove(name)}>-1</button>
        </li>
    );
}

const Items = () => {
    const [itemList,setItemList] = useState([]);
    const [addItemToCart,decrementItem] = useOutletContext();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/12/?limit=100000&offset=0.", { mode: "cors"})
            .then((response) => response.json())
            .then((response) => setItemList(response.items))
            .catch((error) => console.log(error));
    }, []);

    const list = itemList.map(item => <ItemInput name={item.name} add={addItemToCart} remove={decrementItem} key={item.name}/>);

    return (
        <div>
            <h1>Items</h1>
            <div>
                <Link to="/cart/medicine">Go to medicine</Link>
                <div> </div>
                <Link to="/cart/pokeball">Go to pokeballs</Link>
                <div> </div>
                <Link to="/">Home</Link>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );  
};

// name:"held-items"
// url:"https://pokeapi.co/api/v2/item-category/12/"

export default Items;