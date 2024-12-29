import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStarts = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handelClick = (index) => {
    setRating(index);
  };
  const handelMouseEnter = (index) => {
    console.log(index)
    setHover(index);
  };
  const handelMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex items-center justify-center  bg-slate-400 h-[100vh]">
      {[...Array(noOfStarts)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={`${
              index <= (hover || rating) ? "text-yellow-400" : "text-slate-900"
            } text-4xl m-1`}
            onClick={() => handelClick(index)}
            onMouseMove={() => handelMouseEnter(index)}
            onMouseLeave={() => handelMouseLeave}
            size={0}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
