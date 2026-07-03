import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {index:true,Component:Home},
        {
            path:"/register",
            Component:Register
        },
        {
            path:"/login",
            Component:Login
        }
    ]
  },
]);