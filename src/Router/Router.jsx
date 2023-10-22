import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from '../pages/home/Home'
import Error from '../pages/Error/Error'
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                loader: () => fetch('/data.json'),
                element: <Home></Home>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/second",
                element: <div>2</div>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
                // errorElement: <Error></Error>,
            },
            {
                path: "/login",
                element: <Login></Login>,
                // errorElement: <Error></Error>,
            },

        ],

    },
    // {
    //     path: "/error",
    //     element: <Error></Error>
    // },
]);

export default router;