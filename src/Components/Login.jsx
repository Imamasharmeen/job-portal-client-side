import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const {userSignIn} = useContext(AuthContext)

    const handleLogin =(e) => {
        e.preventDefault()
       
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        userSignIn(email, password)
        .then((result) =>{
            console.log(result)
        })
    }
 
  return (
    <div>
      <div>
        <div className="hero bg-base-200 mt-24">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Log in!</h1>
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
