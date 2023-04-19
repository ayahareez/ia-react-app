import Home from"./pages/home/Home"
import Login from"./pages/Auth/Login"
import Register from"./pages/Auth/Register"
import {Navigate,createBrowserRouter,} from "react-router-dom";
import App from "./App";

export  const routes = createBrowserRouter([
  {
   path: '',
   element: <App/>,
   children:[
    {path: "/",
    element: <Home/>,
    },
    {
    path: "/Login",
    element: <Login/>,
    },
    {
    path: "/Register",
    element: <Register/>,
    } ]
  },
  {
    path: '*',
    element: <Navigate to={"/"}/>,
  }
   ]);