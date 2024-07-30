import React from "react";
import { MdFavorite } from "react-icons/md";
import { useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dp } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Movie = ({ item }) => {
  const { id } = useParams();
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const MovieId = doc(dp, "users", `${user?.email}`);

  const UpdateData = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(MovieId, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save data base");
    }
  };

  return (
    <>
      <div key={id} className="relative ">
        <img
          className="max-w-[240px] h-[120px] object-cover"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/70  opacity-0 hover:opacity-100 transition cursor-pointer">
          <p className="w-full flex items-center justify-center h-full text-dimWhite capitalize text-[12px]">
            {item.title}
          </p>
          <p onClick={UpdateData} className="absolute left-2 top-2 z-10">
            {like ? (
              <MdFavorite color="red" size={22} />
            ) : (
              <MdOutlineFavoriteBorder color="white" size={22} />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
