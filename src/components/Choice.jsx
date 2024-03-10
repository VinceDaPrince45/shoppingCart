import { Link } from "react-router-dom";

const Choice = () => {
    return (
        <div>
            Choose what you want to buy
            <div>
                <button>
                    <Link to="items">Items</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="medicine">Medicine</Link>
                </button>
            </div>
            <div>
                <button>
                    <Link to="pokeball">Pokeballs</Link>
                </button>
            </div>
        </div>
    );
}

export default Choice;