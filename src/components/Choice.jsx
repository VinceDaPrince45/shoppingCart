import { Link } from "react-router-dom";

const Choice = () => {
    return (
        <div>
            Choose what you want to buy
            <ul>
                <li>
                    <Link to="items">Items</Link>
                </li>
                <li>
                    <Link to="medicine">Medicine</Link>
                </li>
                <li>
                    <Link to="pokeball">Pokeballs</Link>
                </li>
            </ul>
        </div>
    );
}

export default Choice;