import { createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { auth } from "../Firebase/Firebase.config";
// import { useState } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { NavLink } from "react-router";

const Register = () => {

    // const[Error,setError]=useState('')
    // const [success,setSuccess]=useState(false)
    const [showPasswrod, setShowPassword] = useState(false)

    const submitHendaler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const checkbox = e.target.checkbox.checked
        console.log("Clicket", email, password, checkbox);
        // setError('')
        // setSuccess(false)

        if (!checkbox) {
            toast.error("Plese Select The Chackbox")
            return
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess(true)
                e.target.reset()
                toast.success("Account Create Success")
            })
            .catch(error => {
                console.log(error.message);
                // setError(error.message)
                toast.error(error.message)
            })
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPasswrod)
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={submitHendaler}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={showPasswrod ? "text" : "password"} className="input" name="password" placeholder="Password" />
                                    <button onClick={toggleShowPassword} className="btn btn-xs absolute top-2 right-5" type="button">{showPasswrod ? <FaEyeSlash /> : <IoEyeSharp />}</button>
                                </div>
                                <div>
                                    <label className="label">
                                        <input type="checkbox" name="checkbox" className="checkbox" />
                                        Remember me
                                    </label>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Registar</button>
                            </fieldset>
                        </form>
                        <p>Alredy Have An Account? <NavLink className="text-blue-500 underline" to="/login">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;