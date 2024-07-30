import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handelLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out Successfully");
    //  document.getElementById("my_modal_3").close();

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {
        
      }, 3000);
    }
  };

  return (
    <div>
      <button
        className="custom-font bg-teal-300 text-black px-3 py-2 rounded-md hover:bg-lime-500 hover:text-white duration-300 cursor-pointer "
        onClick={handelLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
