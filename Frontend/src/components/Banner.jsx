import React from "react";
import book_image from "../../public/book_image.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";



function Banner() {

  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/Signup"
  const handleNavigate = () => {
    navigate(from, { replace: true });
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-24 flex flex-col md:flex-row mb-10 ">
        <div className="order-1 md:w-1/2">
          <img
            src={book_image}
            style={{ width: "500px", height: "500px" }}
            alt=""
          />
        </div>
        <div className="order-2 md:w-1/2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Welcome to{" "}
              <span className="text-pink-500">BookMagic</span> - Where Every
              Page Holds Wonder!
            </h1>
            <p className="text-yellow-600">
              Step into a world where stories come alive and imagination knows
              no bounds. At MagicBooks, we believe in the transformative power
              of words, where each book is a portal to new adventures,
              knowledge, and inspiration.
            </p>
            <p className="text-yellow-600">
              Whether you're seeking thrilling mysteries, heartwarming tales, or
              insightful wisdom, our curated collection awaits you. Browse
              through our virtual shelves, discover hidden gems, and embark on
              journeys that will ignite your imagination and enrich your soul.
            </p>

            <p>
              Thank you for visiting BookMagic. Let the magic of reading begin!
            </p>
            <div className="flex flex-end flex-row items-center gap-4 ">
              <div className="w-3/4">
                <label className="input input-bordered flex items-center gap-2  dark:text-black">
                  Email :
                  <input
                    type="text"
                    className="grow"
                    placeholder="dipankar@anysite.com"
                  />
                </label>
              </div>

              <div className="w-0.5/4">
                <button className=" custom-font bg-teal-300 text-black px-3 py-2 rounded-md hover:bg-lime-500 hover:text-white duration-300 cursor-pointer "
                onClick={handleNavigate}
>
                  Start
                  
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
