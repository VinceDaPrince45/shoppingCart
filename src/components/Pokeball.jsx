import { Link,useOutletContext } from "react-router-dom";
import { useState,useEffect } from "react";

// need to make component that I will pass each item into that will allow for addinng/removing to cart

function PokemonInput({name,add,remove}) {
    return (
        <li>
            {name}
            <button onClick={()=>add(name)}>+</button>
            <button onClick={()=>remove(name)}>-</button>
        </li>
    );
}

const Pokeballs = () => {
    const [pokeballs,setPokeballs] = useState([]);
    const [addItemToCart,decrementItem] = useOutletContext();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/item-category/34/", {mode:"cors"})
            .then((response) => response.json())
            .then((response) => setPokeballs(response.items))
            .catch((error) => console.log(error));
        fetch("https://pokeapi.co/api/v2/item-category/33/",{mode:"cors"})
            .then((response) => response.json())
            .then((response) => setPokeballs(pokeballs => [...pokeballs,...response.items]))
            .catch((error) => console.log(error));
    }, []);

    const pokeballList = pokeballs.map(ball => <PokemonInput name={ball.name} add={addItemToCart} remove={decrementItem} key={ball.name}/>);

    return (
        <div>
            <h1>PokeBalls</h1>
            <div>
                <button>
                    <Link to="/cart/items">Go to items</Link>
                </button>
                <div></div>
                <button>
                    <Link to="/cart/medicine">Go to medicine</Link>
                </button>
                <div></div>
                <button>
                    <Link to="/">Home</Link>
                </button>
            </div>
            <ul>
                {pokeballList}
            </ul>
        </div>
    );  
};

//name:"standard-balls"
// url:"https://pokeapi.co/api/v2/item-category/34/"
// url:"https://pokeapi.co/api/v2/item-category/33/"

export default Pokeballs;