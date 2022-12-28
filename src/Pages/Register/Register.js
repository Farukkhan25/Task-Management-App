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
      <div className="hero w-full p-2 md:p-24 bg-[#433aa8]">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left mt-6">
            <img
              className="lg:w-3/4 lg:pt-10 lg:mt-4 sm:px-2 mx-2"
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?w=826&t=st=1666860644~exp=1666861244~hmac=6d992bd520b859c5a64d13102afca25b86fb8afa9423a6319aa8d1d8b9bec8e9"
              class="w-100 rounded-4 shadow-4"
              alt=""
            />
          </div>
          <div className="relative flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full px-6 py-12 lg:py-24 m-auto bg-white rounded-md shadow-xl lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit(handleRegister)} className="mt-6">
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    {" "}
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    placeholder="your name"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    {" "}
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
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
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="text-center pt-4">
                Already have an account?{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;