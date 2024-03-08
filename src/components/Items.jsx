import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Items = () => {
    const [itemList,setItemList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/12/?limit=100000&offset=0.", { mode: "cors"})
            .then((response) => response.json())
            .then((response) => setItemList(response.items))
            .catch((error) => console.log(error));
    }, []);

    const list = itemList.map(item => <li>{item.name}</li>);

    return (
        <div>
            <h1>Medicine</h1>
            <ul>
                {list}
            </ul>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );  
};

// name:"held-items"
// url:"https://pokeapi.co/api/v2/item-category/12/"

export default Items;