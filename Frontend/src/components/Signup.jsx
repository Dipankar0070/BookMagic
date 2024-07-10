import React from 'react'
import { Link } from 'react-router-dom'
import SignUp_page from "../../public/SignUp_page.jpg";
import Login from './Login';
import { useForm } from 'react-hook-form';


function Signup() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <>
      <div className="flex h-screen items-center justify-center  bg-contain bg-center" style={{backgroundImage: `url(${SignUp_page})`}}>
       
        <div  className="ml-20 mt-4 w-[600px]">
          <div className="modal-box border-[2px] p-5 rounded-2xl shadow bg-white bg-opacity-80">
            <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="custom-font font-bold text-lg ">SignUp</h3>

            <div className="space-y-2 mt-4">
              <span className="custom-font">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="h-8 w-80 px-1 border rounded-md  outline-none mt-2 "
                {...register("Name", { required: true })}

             />
             <br />
             {errors.Name && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>


            <div className="space-y-2 mt-4">
              <span className="custom-font">Email</span>
              <br />
              <input
                type="email"
                placeholder="dipankar@anysite.com"
                className="h-8 w-80 px-1 border rounded-md  outline-none mt-2 "
                {...register("Email", { required: true })}

            />
  <br />
  {errors.Email && (
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
                placeholder="Enter Your Password"
                className="h-8 w-80 px-1 border rounded-md  outline-none mt-2"
                {...register("Password", { required: true })}

             />
             <br />
             {errors.Password && (
                <span className="text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 flex justify-around">
              <button className="custom-font bg-teal-300 text-black px-2 py-1 rounded-md hover:bg-lime-500 hover:text-white duration-300 cursor-pointer">
                SignUp
              </button>
              <p className="mt-1.5 ">
                <span className="text-lg font-bold"> Have Account ? </span>{" "}
                <button                  
                  className="custom-font-Signup underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                
                  Login
                </button>
                <Login/>
              </p>
            </div>

            <div></div>
            </form> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
