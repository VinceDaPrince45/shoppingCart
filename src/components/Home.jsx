import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="cart">Get Gear!</Link>
        </div>
    );
}

export default Home;