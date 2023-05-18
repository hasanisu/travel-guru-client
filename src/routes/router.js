import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Destination from "../pages/Destination/Destination";
import Blogs from "../pages/Blogs/Blogs";
import News from "../pages/News/News";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Home/Home";

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
            }
            
        ]
    }
]) 