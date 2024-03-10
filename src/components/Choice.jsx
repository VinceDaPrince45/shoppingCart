import { Link } from "react-router-dom";

const Choice = () => {
    return (
        <div className="choice">
            <ul class="framed buttons">
                <li>
                    <h3>Choose what you want to buy</h3>
                </li>
                <li>
                    <button>
                        <Link to="items">Items</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="medicine">Medicine</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="pokeball">Pokeballs</Link>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Choice;