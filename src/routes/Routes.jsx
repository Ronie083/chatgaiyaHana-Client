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
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: 'chefs',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
            }
        ]
    }
])

export default router;
