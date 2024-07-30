import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Items from "../App";
import Movie from "./movie";

const Movies = ({ title, url, keyId }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  // Items(data);
  const slide = document.getElementById("slider" + keyId);
  const scroll = (d) => {
    if (d === "r") {
      slide.scrollLeft += 500;
    } else {
      slide.scrollLeft -= 500;
      if (slide.scrollLeft == 0) {
        slide.scrollLeft += slide.scrollWidth;
      }
    }
  };

  const GetData = () => {
    axios.get(url).then((res) => {
      return setMovies(res.data.results);
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="md:px-8 px-4 my-8 select-none ">
      <h1 className="text-white md:text-[20px] tracking-[2px] text-[16px] capitalize mb-6 ">
        {title}
      </h1>
      <div className="flex items-center relative group">
        <IoIosArrowBack
          onClick={() => scroll("l")}
          className="hidden group-hover:block bg-white/30 hover:bg-white/100 transition cursor-pointer text-black  absolute left-0 z-[50] rounded-full p-1 w-[30px] h-[30px]"
        />
        <div
          id={`slider` + keyId}
          className=" slide flex items-center justify-between   cursor-pointer hover:opacity-100 relative gap-5 w-full h-full overflow-x-scroll scroll-smooth   scrollbar-hide "
        >
          {movies.map((item, id) => {
            return <Movie item={item} key={id} />;
          })}
        </div>
        <IoIosArrowForward
          onClick={() => scroll("r")}
          className="hidden group-hover:block bg-white/30  transition cursor-pointer  hover:bg-white/100  text-black  absolute right-0 z-[50] rounded-full p-1 w-[30px] h-[30px]"
        />
      </div>
    </div>
  );
};

export default Movies;
