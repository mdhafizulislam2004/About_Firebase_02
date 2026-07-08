import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const links = <>
        <li className="md:m-2"><NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to="/">Home</NavLink></li>
        {/* <li className="md:m-2"><NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to="/">About</NavLink></li> */}
        {/* <li className="md:m-2"><NavLink className={({ isActive }) => isActive ? "text-red-400" : "text-black"} to="/other">Register</NavLink></li> */}
    </>

    const toggleHendaler = () => {
        setToggle(!toggle)
        if (!toggle) {
            navigate("/register");
        } else {
            navigate("/login");
        }
    }

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/"><a className="btn-ghost text-xl">daisyUI</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="label text-black font-extrabold">
                    {toggle ? "Register" : <NavLink  to="/login">Login</NavLink>}
                    <input onClick={toggleHendaler} type="checkbox" className="toggle" />
                </label>
            </div>
        </div>
    );
};

export default Navbar;