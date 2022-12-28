import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const { login, setLoading, providerLogin, resetPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserEmail(data.email);

        // get jwt token
        // fetch("https://server-alpha-lake.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     localStorage.setItem("task-token", data.token);
        //     toast.success("Login successful !");
        //     navigate(from, { replace: true });
        //   });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // Google Signin
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // get jwt token
        // fetch("https://server-alpha-lake.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     localStorage.setItem("task-token", data.token);
        //     navigate(from, { replace: true });
        //   });
      })
      .catch((error) => console.error(error));
  };

  //Reset Password
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Reset link has been sent, please check email");
      })
      .catch((error) => toast.error(error.message));
  };

  //   useTitle("Login");

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img
            className="w-3/4"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
               
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
               
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>

            <div>{error && <p className="text-red-600">{error}</p>}</div>
          </form>
          <div className="space-y-1 px-8">
            <button
              onClick={handleReset}
              className="text-xs hover:underline text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm text-slate-200">
              Login with social account
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSignin}
              aria-label="Log in with Google"
              className="p-3 my-3 rounded-sm bg-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-blue-700"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
