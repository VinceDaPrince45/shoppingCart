import { Link } from "react-router-dom";

const Pokeballs = () => {
    return (
        <div>
            <h1>Medicine</h1>
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