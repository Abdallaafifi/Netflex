import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import requests from "../DataApi";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const Posters = movies[Math.floor(Math.random() * movies.length)];

  const GetData = () => {
    axios.get(requests.PopularMovies).then((response) => {
      return setMovies(response.data.results);
    });
  };
  // const { i } = useParams(null);

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="relative top-0 left-0 w-full h-[620px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${Posters?.backdrop_path}`}
        alt={Posters?.title}
        className="w-full h-full object-cover"
      />
      <div className="w-full h-[620px] bg-gradient-to-r from-black absolute top-0 left-0 "></div>
      <div className="absolute top-[40%] left-0 px-8 py-8">
        <h1 className="md:text-4xl text-3xl text-gray-50 my-4">
          {Posters?.title}
        </h1>
        <div className="">
          <Link to={"/mov/" + Posters?.title.split(" ").join("")}>
            <button
              onClick={() =>
                localStorage.setItem("new", JSON.stringify(Posters))
              }
              className="text-[16px]  px-5 py-2 bg-[#ffffffe0] font-bold   text-black  capitalize mr-4"
            >
              play
            </button>
          </Link>
          <button className="text-[15px] text-dimWhite border border-gray-500  capitalize  py-2 px-6 bg-[#0a0a0a]  ">
            {" "}
            watch later
          </button>
        </div>
        <p className="text-gray-400 text-sm  capitalize md:w-[60%] w-full  mt-6">
          release date : {Posters?.release_date}
        </p>
        <p className="text-gray-300 text-sm  md:w-[60%] w-full mt-2 ">
          {Posters?.overview.length > 120
            ? Posters?.overview.slice(0, 120) + "..."
            : Posters?.overview}
        </p>
      </div>
    </div>
  );
};

export default Main;
