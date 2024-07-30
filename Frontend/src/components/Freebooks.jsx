import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Cardss from "./Cardss";

function Freebooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
     const res=   await axios.get("http://localhost:4001/book");
   console.log(res.data.filter((data) => data.Category === "Free"));
   setBook(res.data.filter((data) => data.Category === "Free"));
    } catch (error) {
      console.log(error)
    }

    };
    getBook();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 mb-4">
        <div className="pb-4">
          <h1 className="custom-font-free font-bold pb-2">Free Books</h1>
          <p >
            Explore a treasure trove of knowledge with our wide selection of
            free books. From classics to contemporary reads, there's something
            for every reader to enjoy without spending a dime.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item)=> (
            <Cardss item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;
