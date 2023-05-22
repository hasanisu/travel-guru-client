import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Destination from "../pages/Destination/Destination";
import Blogs from "../pages/Blogs/Blogs";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";
import Sajek from "../pages/Visit/Sajek";
import Srimongol from "../pages/Visit/Srimongol";
import Sunderban from "../pages/Visit/Sunderban";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/Destination',
                element: <Destination></Destination>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/booking',
                element: <Booking></Booking>
            },
            {
                path:'/sajek',
                element:<Sajek></Sajek>
            },
            {
                path:'/srimongol',
                element:<Srimongol></Srimongol>
            },
            {
                path:'/sunderban',
                element:<Sunderban></Sunderban>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
            
        ]
    }
]) 