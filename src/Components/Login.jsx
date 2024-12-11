import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.init";

const Login = () => {
    const {userSignIn,googleLogin} = useContext(AuthContext)


    const handleLogin =(e) => {
        e.preventDefault()
       
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        userSignIn(email, password)
      
        .then((result) =>{
            console.log(result)
        })

        const googleLogin =() =>{
            googleLogin()
            .then((result) =>{
                console.log(result.user)
            })
            .catch((error) =>{
                console.log(error)
            })
        }
       
    }

 
 
  return (
    <div>
      <div>
        <div className="hero bg-base-200 mt-24">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Log in!</h1>
            </div>

            <div>
            
          <button onClick={googleLogin} className="border-2 rounded-xl px-4 py-2 mb-4 w-full flex  gap-7 items-center">
          <FcGoogle />Log in with Google
          </button>
          <p className="pb-3 text-center">______ or Log in with google ______</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <button className="btn bg-blue-300">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
