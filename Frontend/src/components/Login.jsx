import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged In Successfull");
          document.getElementById("my_modal_3").close();

          setTimeout(() => {
            window.location.reload();

            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-12 mt-4  mr-2">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="custom-font font-bold text-lg ">Login</h3>

            <div className="space-y-2 mt-4">
              <span className="custom-font">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="h-8 w-80 px-1 border rounded-md  outline-none mt-2 "
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <span className="custom-font">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="h-8 w-80 px-1 border rounded-md  outline-none mt-2"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 flex justify-around">
              <button className="custom-font bg-teal-300 text-black px-2 py-1 rounded-md hover:bg-lime-500 hover:text-white duration-300 cursor-pointer">
                Login
              </button>
              <p className="mt-1.5 ">
                <span className="text-lg font-bold"> New User ? </span>{" "}
                <Link
                  to="/Signup"
                  className="custom-font-Signup underline text-blue-500 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <div></div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
