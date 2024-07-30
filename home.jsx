import { data } from "autoprefixer";
import React from "react";
import Main from "../compononet/main";
import Movies from "../compononet/movies";
import requests from "../DataApi";

const Home = () => {
  return (
    <>
      <Main />
      <Movies keyId={"1"} title="popularity" url={requests.PopularMovies} />
      <Movies keyId={"2"} title="Top_Rated" url={requests.topRated} />
      <Movies keyId={"3"} title="Up_Coming" url={requests.Upcoming} />
      <Movies keyId={"4"} title="Now Playing" url={requests.nowPlaying} />
    </>
  );
};

export default Home;
