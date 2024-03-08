import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Pokeballs = () => {
    const [pokeballs,setPokeballs] = useState([]);

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

    const pokeballList = pokeballs.map(ball => <li>{ball.name}</li>);

    return (
        <div>
            <h1>PokeBalls</h1>
            <ul>
                {pokeballList}
            </ul>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );  
};

//name:"standard-balls"
// url:"https://pokeapi.co/api/v2/item-category/34/"
// url:"https://pokeapi.co/api/v2/item-category/33/"

export default Pokeballs;