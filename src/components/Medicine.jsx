import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Medicine = () => {
    const [medicineList,setMedicineList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.", { mode: "cors"})
            .then((response) => response.json())
            .then((response) => setMedicineList(response.items))
            .catch((error) => console.log(error));
    }, []);

    const medList = medicineList.map(item => <li>{item.name}</li>);

    return (
        <div>
            <h1>Medicine</h1>
            <div>
                <Link to="/cart/items">Go to items</Link>
                <Link to="/cart/pokeball">Go to pokeballs</Link>
            </div>
            <ul>
                {medList}
            </ul>
        </div>
    );  
};

// medicine:
// https://pokeapi.co/api/v2/item-category/27/
// https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.


export default Medicine;