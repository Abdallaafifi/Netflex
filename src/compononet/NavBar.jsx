import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handelLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full px-8  fixed top-0 left-0 py-4 z-[100]">
        <div className="flex justify-between items-start">
          <Link to={"/"}>
            <h1 className="text-red-600 text-2xl md:text-4xl capitalize">
              movies
            </h1>
          </Link>

          {user?.email ? (
            <div className="">
              <Link to={"/Account"}>
                <button className="text-[16px] text-white font-semibold capitalize mr-4">
                  account
                </button>
              </Link>

              <button
                onClick={() => handelLogOut()}
                className="text-[16px] text-white font-semibold  capitalize py-2 px-4 bg-red-600 rounded  "
              >
                log out
              </button>
            </div>
          ) : (
            <div className="">
              <Link to={"/logIn"}>
                <button className="text-[16px] text-white font-semibold capitalize mr-4">
                  sing in{" "}
                </button>
              </Link>

              <Link to={"/signUp"}>
                <button className="text-[16px] text-white font-semibold  capitalize py-2 px-4 bg-red-600 rounded  ">
                  sing up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
