import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Medicine from "./Medicine";
import Pokeball from "./Pokeball";
import Error from "./Error";
import ShoppingCart from "./ShoppingCart";
import Choice from "./Choice";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />,
        },
        {
            path: "cart",
            element: <ShoppingCart />,
            children: [
                {
                    index:true, element: <Choice />
                },
                {
                    path: "items", element: <Items />
                },
                {
                    path: "medicine", element: <Medicine />
                },
                {
                    path: "pokeball", element: <Pokeball />
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;