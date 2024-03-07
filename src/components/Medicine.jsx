import { Link } from "react-router-dom";

const Medicine = () => {
    return (
        <div>
            <h1>Medicine</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );  
};

// medicine:
// https://pokeapi.co/api/v2/item-category/27/
// https://pokeapi.co/api/v2/item-category/27/?limit=100000&offset=0.


export default Medicine;