import React, { useEffect, useState } from "react";
//import Card from "../../public/Card.json";
import Cardss from "./Cardss";
import axios from "axios";
import {Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
     const res=   await axios.get("http://localhost:4001/book");
   console.log(res.data)
   setBook(res.data)
    } catch (error) {
      console.log(error)
    }

    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
        <div className="space-y-6 mt-28 items-center justify-center text-center">
          <h1 className="text-3xl">
            <span className="text-pink-500">Welcome </span>to the{" "}
            <span className="text-rose-500">BookMagic</span> where dreams take
            shape and knowledge dances between the lines
          </h1>
          <p>
            "Books are more than mere ink on paper; they are gateways to worlds
            unknown and perspectives unexplored. Within their pages, stories
            breathe life into characters who become companions, mentors, and
            adversaries. Each turn of the page unveils new landscapes,
            challenges, and revelations, stirring emotions and expanding
            horizons. Books are not just repositories of knowledge but vessels
            of empathy and imagination, offering refuge, solace, and inspiration
            to all who seek them. They bridge the gaps between cultures,
            generations, and realities, fostering understanding and sparking
            curiosity in the hearts of readers everywhere."
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cardss key={item.id} item={item} />
          ))}
        </div>
        <div className="item-center text-center justify-center mt-4 mb-4">
          <Link to="/">
            <button className=" custom-font bg-teal-300  text-black px-3 py-1.5 rounded-md mt-4 hover:bg-lime-500 hover:text-white duration-300 cursor-pointer ">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
