import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div className="home">
        <ul class="framed buttons">
            <li>
                <h3>Welcome,</h3>
            </li>
            <li><button><Link to="cart">Click to Enter</Link></button></li>
        </ul>
    </div>
    );
}

export default Home;