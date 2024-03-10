import { Link, useOutletContext } from "react-router-dom";
import { useState,useEffect } from "react";

function ItemInput({name,add,remove}) {
    return (
        <li className="item">
            <div className="item-name">{name}</div>
            <div className="item-buttons">
                <button onClick={()=>add(name)}>+</button>
                <button onClick={()=>remove(name)}>-</button>
            </div>
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
        <div className="right-col">
            <h1>Items</h1>
            <ul className="framed buttons compact">
                <li>
                    <button>
                        <Link to="/cart/pokeball">&lt; pokeballs</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/cart/medicine">medicine &gt;</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                </li>
            </ul>
            <ul className="framed buttons item-list">
                {list}
            </ul>
        </div>
    );  
};

// name:"held-items"
// url:"https://pokeapi.co/api/v2/item-category/12/"

export default Items;