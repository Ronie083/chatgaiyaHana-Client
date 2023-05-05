import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chef from "../pages/Home/Chef/Chef";
import RecipeLayout from "../layouts/RecipeLayout";
import Blogs from "../pages/Home/Blogs/Blogs";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/Shared/NotFound/NotFound";

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
                path: 'blog',
                element: <Blogs></Blogs>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: 'chefs',
        element: <RecipeLayout></RecipeLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><Chef></Chef></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://chatgaiya-hana-server.vercel.app/recipes/${params.id}`),
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
      }
])

export default router;
