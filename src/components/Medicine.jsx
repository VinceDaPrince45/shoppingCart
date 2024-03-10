import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function MedicineInput({name,add,remove}) {
    return (
        <li>
            {name}
            <button onClick={()=>add(name)}>+1</button>
            <button onClick={()=>remove(name)}>-1</button>
        </li>
    );
}

const Medicine = () => {
    const [medicineList,setMedicineList] = useState([]);
    const [addItemToCart,decrementItem] = useOutletContext();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.", { mode: "cors"})
            .then((response) => response.json())
            .then((response) => setMedicineList(response.items))
            .catch((error) => console.log(error));
    }, []);

    const medList = medicineList.map(item => <MedicineInput name={item.name} add={addItemToCart} remove={decrementItem} key={item.name}/>);

    return (
        <div>
            <h1>Medicine</h1>
            <div>
                <Link to="/cart/items">Go to items</Link>
                <div> </div>
                <Link to="/cart/pokeball">Go to pokeballs</Link>
                <div> </div>
                <Link to="/">Home</Link>
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