import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (data) => {
      setError("");
      createUser(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success("Registration successful !");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    };

    // useTitle("Register");

    return (
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-3/4"
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?w=826&t=st=1666860644~exp=1666861244~hmac=6d992bd520b859c5a64d13102afca25b86fb8afa9423a6319aa8d1d8b9bec8e9"
              class="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(handleRegister)} className="card-body">
              <div className="form-control">
                <label className="label">
                  {" "}
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                  placeholder="your name"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;