import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Medicine from "./Medicine";
import Pokeball from "./Pokeball";
import Error from "./Error";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <Error />
        },
        {
            path: "medicine",
            element: <Medicine />
        },
        {
            path: "items",
            element: <Items />
        },
        {
            path: "pokeball",
            element: <Pokeball />
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;