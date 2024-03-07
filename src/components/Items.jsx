import { Link } from "react-router-dom";

const Items = () => {
    return (
        <div>
            <h1>Medicine</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );  
};

// name:"held-items"
// url:"https://pokeapi.co/api/v2/item-category/12/"

export default Items;