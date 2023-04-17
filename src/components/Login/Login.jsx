import React, { useContext, useState } from 'react';
import { userContext } from '../../authProvider/AuthProvidr';

const Login = () => {
  const [user, setUser] = useState({})
  const { signIn } = useContext(userContext)
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(user => {
        const loginUser = user.user;
        console.log(loginUser)
        setUser(loginUser)
      })
      .catch(err => { err.message })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <h2> user is {user.email}</h2>
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label id='email' className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;