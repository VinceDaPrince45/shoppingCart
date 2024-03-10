import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function MedicineInput({name,add,remove}) {
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

const Medicine = () => {
    const [medicineList,setMedicineList] = useState([]);
    const [addItemToCart,decrementItem] = useOutletContext();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.", { mode: "cors"})
            .then((response) => response.json())
            .then((response) => {
                console.log(response.items);
                setMedicineList(response.items);
            })
            .catch((error) => console.log(error));
    }, []);

    const medList = medicineList.map(item => <MedicineInput name={item.name} add={addItemToCart} remove={decrementItem} key={item.name}/>);

    return (
        <div className="right-col">
            <h1>Medicine</h1>
            <ul className="framed buttons compact">
                <li>
                    <button>
                        <Link to="/cart/items">&lt; items</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/cart/pokeball">pokeballs &gt;</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/">Home</Link>
                    </button>
                </li>
            </ul>
            <ul className="framed buttons item-list">
                {medList}
            </ul>
        </div>
    );  
};

// medicine:
// https://pokeapi.co/api/v2/item-category/27/
// https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.


export default Medicine;