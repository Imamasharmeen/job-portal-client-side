import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Register = () => {

        const handleRegister = (e) =>{
            const {createUser} = useContext(AuthContext)
            e.preventDefault()

            const name = e.target.name.value;
            const photo = e.target.photo.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(name ,email, photo, password)

            createUser(email, password) 
                .then ((result) => {
                    console.log(result.user)
                })
                .catch((error) =>{
                    console.log(error)
                } )
            

        }

    return (
        <div>
                <div className="hero bg-base-200 mt-24">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up!</h1>
         
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
              <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
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
           
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;