import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router";
import UserService from "../services/user.service";


const SocialLogin = () => {
  const { signUpWithGoogle, signUpWithFacebook, signUpWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Google Sign Up Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign Up Failed",
          text: error.message,
        });
      });
  };

  const handleFacebookSignUp = () => {
    signUpWithFacebook()
      .then((result) => {
        const user = result.user;
        console.log("Facebook Login Result:", result);
        Swal.fire({
          icon: "success",
          title: "Facebook Sign Up Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Facebook Login Error:", error);
        Swal.fire({
          icon: "error",
          title: "Facebook Sign Up Failed",
          text: error.message,
        });
      });
  };

  const handleGithubSignUp = () => {
    signUpWithGitHub()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "GitHub Sign Up Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("login").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "GitHub Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="text-center space-x-3 mb-5">
      <button
        className="btn btn-ghost btn-circle hover:bg-red hover:text-white"
        onClick={handleGoogleSignUp}
      >
        <FaGoogle className="w-6 h-6" />
      </button>
      <button
        className="btn btn-ghost btn-circle hover:bg-red hover:text-white"
        onClick={handleGithubSignUp}
      >
        <FaGithub className="w-6 h-6" />
      </button>
      <button
        className="btn btn-ghost btn-circle hover:bg-red hover:text-white"
        onClick={handleFacebookSignUp}
      >
        <FaFacebook className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialLogin;
