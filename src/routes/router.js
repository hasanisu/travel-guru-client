import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import News from "../pages/shared/News/News";
import Destination from "../pages/Destination/Destination";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <News></News>
            },
            {
                path:'/Destination',
                element: <Destination></Destination>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            
        ]
    }
]) 