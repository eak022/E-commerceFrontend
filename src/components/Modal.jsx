import React, { useState, useContext } from "react";
import { FaCookie, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router";

const Modal = (name) => {
  const { login, signUpWithGoogle, signUpWithGithub, signUpWithFacebook } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };
  const googleSignUp = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Signup failed:", error.message);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };
  const facebookSignUp = () => {
    signUpWithFacebook()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Facebook Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Facebook Login failed:", error.message);
        Swal.fire({
          icon: "error",
          title: "Facebook Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };
  const githubSignUp = () => {
    signUpWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Github Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Github Login failed:", error.message);
        Swal.fire({
          icon: "error",
          title: "Github Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      {/* Modal */}
      <dialog id="login" className="modal">
        <div className="modal-box relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("login").close()}
          >
            X
          </button>
          <h3 className="font-bold text-lg text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="input input-bordered w-full flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </label>
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="from-control mt-6">
              <input
                type="submit"
                value={"Login"}
                className="btn bg-red ml-1 text-white"
              />
            </div>
            <p className="text-center my-2">
              Don&apos;t have an account
              <a href="/signup" className="underline text-md ml-1">
                Sign Up Now
              </a>
            </p>
          </form>
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
              <FaGoogle className="size-5" onClick={googleSignUp} />
            </button>
            <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
              <FaFacebook className="size-5" onClick={facebookSignUp} />
            </button>
            <button className="btn btn-ghost btn-circle hover:bg-red hover:text-white">
              <FaGithub className="size-5" onClick={githubSignUp} />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
