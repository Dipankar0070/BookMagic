import React from "react";

function Cardss({ item }) {
  return (
    <>
      <div className="mt-4 p-3">
        <div className="card bg-blue-100 w-98 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} className="resized " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.Category}</div>
            </h2>
            <p>{item.Title}</p>
            <div className="card-actions flex justify-between">
              <div className="bg-teal-300 text-black px-2 py-0.5 rounded-md">
                ₹ {item.Price}
              </div>
              <a className="custom-font bg-teal-300 text-black px-2 py-0.5 rounded-md hover:bg-lime-500 hover:text-white duration-300 cursor-pointer ">
                Read Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardss;
