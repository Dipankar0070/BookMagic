import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Navigate, Route, Routes} from "react-router-dom"
import Books from "./Book/Books";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";

function App() {
  
const [authUser , setAuthUser]=useAuth()
console.log(authUser);


  return (
    <>
    <div  className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Books" element={authUser ?<Books/>:<Navigate to ="/Signup"/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
      </Routes>
      <Toaster />
      </div>

    </>
  );
}

export default App;
