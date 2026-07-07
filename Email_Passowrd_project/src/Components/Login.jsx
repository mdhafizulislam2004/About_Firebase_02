import {signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

const Login = () => {

    const submitHendaler=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset()
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message)
        })
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={submitHendaler}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p>Don't Have An Account? <NavLink className="text-blue-500 underline" to="/register">Register</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;