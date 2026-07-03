import { Outlet } from "react-router";
import Header from "../Components/Navbar";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;