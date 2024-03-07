import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="medicine">Medicine</Link>
                </li>
                <li>
                    <Link to="items">Items</Link>
                </li>
                <li>
                    <Link to="pokeball">Pokeballs</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;