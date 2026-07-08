import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { PiEyeBold, PiEyeClosed } from "react-icons/pi";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()

    const submitHendaler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset()
                if (!result.user.emailVerified) {
                    toast.error("Verify Your Email Address")
                }
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })

    }

    const forgetPassword = () => {
        console.log("Forget Password");
        const email = emailRef.current.value("")
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Please Chack Your Email")
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const togglePasswordShow = () => {
        setShowPassword(!showPassword)
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
                                <input type="email" className="input" placeholder="Email" ref={emailRef} name="email" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} className="input" name="password" placeholder="Password" />
                                    <button className="btn-xs btn absolute top-2 right-5" type="button" onClick={togglePasswordShow}>{showPassword ?<PiEyeClosed/>:<PiEyeBold/>}</button>
                                </div>
                                <div><a className="link link-hover" onClick={forgetPassword}>Forgot password?</a></div>
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