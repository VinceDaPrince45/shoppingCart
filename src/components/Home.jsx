import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button>
                <Link to="cart">Click to Enter</Link>
            </button>
        </div>
    );
}

export default Home;