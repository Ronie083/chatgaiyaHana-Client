import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layouts/RecipeLayout";
import Blogs from "../pages/Home/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/chefs/:id',
        element:<RecipeLayout> <Chef></Chef> </RecipeLayout> ,
        loader:({params}) => fetch(`http://localhost:5000/recipes/${params.id}`),
    },
    {
        path:'/blog',
        element:<Blogs></Blogs>
    }
])

export default router;
