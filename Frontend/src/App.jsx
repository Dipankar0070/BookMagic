import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Route, Routes} from "react-router-dom"
import Books from "./Book/Books";
import Signup from "./components/Signup";


function App() {
  return (
    <>
    <div  className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
      </Routes>
      </div>

    </>
  );
}

export default App;
